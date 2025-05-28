import { prisma } from '../../db/db.js';

// export const create_flate = async (req, res) => {
//   const {
//     title,
//     description,
//     city,
//     address,
//     availableFrom,
//     roommates,
//     preferredGender,
//     isAvailable,
//     rent
//   } = req.body;

//   const userId = req.user?.id;

//   // Basic required fields check
//   if (
//     !title || !description || !city || !address ||
//     !availableFrom || roommates == null || !preferredGender ||
//     isAvailable == null || rent == null || !userId
//   ) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   // Validate and normalize preferredGender enum
//   const gender = preferredGender.toUpperCase();
//   const validGenders = ["MALE", "FEMALE", "ANY"];
//   if (!validGenders.includes(gender)) {
//     return res.status(400).json({ message: "Invalid preferredGender value." });
//   }

//   // Validate date
//   const availableDate = new Date(availableFrom);
//   if (isNaN(availableDate.getTime())) {
//     return res.status(400).json({ message: "Invalid availableFrom date." });
//   }

//   // Convert roommates and rent to numbers
//   const roommatesNum = Number(roommates);
//   const rentNum = Number(rent);
//   if (isNaN(roommatesNum) || isNaN(rentNum)) {
//     return res.status(400).json({ message: "roommates and rent must be valid numbers." });
//   }

//   try {
//     const newFlat = await prisma.flat.create({
//       data: {
//         title,
//         description,
//         city,
//         address,
//         availableFrom: availableDate,
//         roommates: roommatesNum,
//         preferredGender: gender,
//         isAvailable,
//         rent: rentNum,
//         postedBy: {
//           connect: { id: userId },
//         },
//       },
//     });

//     res.status(201).json({ message: "Flat created successfully", flat: newFlat });
//   } catch (error) {
//     console.error("Error creating flat:", error);
//     res.status(500).json({ message: "Server error. Could not create flat." });
//   }
// };


export const create_flate = async (req, res) => {
  try {
    const {
      title,
      description,
      city,
      address,
      availableFrom,
      roommates,
      preferredGender,
      isAvailable,
      rent,
    } = req.body;

    const userId = req.user?.id;
    if (
      !title || !description || !city || !address ||
      !availableFrom || roommates == null || !preferredGender ||
      isAvailable == null || !rent || !userId
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const genderMap = {
      MALE: "MALE",
      FEMALE: "FEMALE",
      ANY: "ANY",
      male: "MALE",
      female: "FEMALE",
      any: "ANY"
    };

    const gender = genderMap[preferredGender.toUpperCase()];
    if (!gender) {
      return res.status(400).json({ message: "Invalid preferredGender value" });
    }

    const newFlat = await prisma.flat.create({
      data: {
        title,
        description,
        city,
        address,
        availableFrom: new Date(availableFrom),
        roommates: Number(roommates),
        preferredGender: gender,
        isAvailable,
        rent: Number(rent),
        verified: true,  
        postedBy: {
          connect: { id: userId },
        },
      },
    });

    res.status(201).json({ message: "Flat created successfully", flat: newFlat });

  } catch (error) {
  console.error("Error creating flat:", error.message, error.stack);
  res.status(500).json({ message: "Server error. Could not create flat.", error: error.message });
}
};
