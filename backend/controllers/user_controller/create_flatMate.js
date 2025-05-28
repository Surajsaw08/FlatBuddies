// import { memo } from "react";
// import { prisma } from "../../db/db.js"

//  export const create_flateMate =async (req,res)=>{
// try{
//   const {
//     city,
//     budgetMin,
//     budgetMax,
//     preferredGender,
//     moveInDate,
//     occupation,
//     habits,
//     description,
//     ageMin,
//     ageMax
//   }=req.body;

  
//   const userId = req.user?.id;

//   if(!city || budgetMax==null || budgetMin ==null || !preferredGender|| !moveInDate || !occupation || !habits || !description || ageMax ==null || ageMin ==null){
//     return res.status(400).json({message:"All fields are required."})
//   }



//   const newflatmate = await prisma.flatmatePost.create({
//     data:{
//       user:{
//           connect: { id: userId },
//       },
//        userId,
//        city,
//        budgetMin:Number(budgetMin),
//        budgetMax:Number(budgetMax),
//        ageMin:ageMin,
//        ageMax:ageMax,
//        preferredGender,
//        moveInDate:new Date(moveInDate),
//        occupation,
//        habits,
//        description,
       
//     }
//   });
//    res.status(201).json({ message: "Flatmate register successfully", flatmatePost: newflatmate });


//  }catch(error){
//   console.error("Error registering flatmate",error.message,error.stack);
//   res.status(500).json({message:"server error, not register flatemate",error :error.message});
//  }


// }


import { prisma } from "../../db/db.js";

export const create_flateMate = async (req, res) => {
  try {
    const { user } = req;

    if (!user || !user.id) {
      return res.status(401).json({ 
        success: false,
        message: "Authentication required" 
      });
    }

    const requiredFields = [
      'city', 'budgetMin', 'budgetMax', 'preferredGender',
      'moveInDate', 'occupation', 'habits', 'description',
      'ageMin', 'ageMax'
    ];

    const missingFields = requiredFields.filter(field => !req.body[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        missingFields
      });
    }

    const {
      city,
      budgetMin,
      budgetMax,
      preferredGender,
      moveInDate,
      occupation,
      habits,
      description,
      ageMin,
      ageMax
    } = req.body;

    const errors = [];

    // Parse and validate numbers
    const budgetMinNum = Number(budgetMin);
    const budgetMaxNum = Number(budgetMax);
    const ageMinNum = Number(ageMin);
    const ageMaxNum = Number(ageMax);

    if (isNaN(budgetMinNum)) errors.push("budgetMin must be a number");
    if (isNaN(budgetMaxNum)) errors.push("budgetMax must be a number");
    if (isNaN(ageMinNum)) errors.push("ageMin must be a number");
    if (isNaN(ageMaxNum)) errors.push("ageMax must be a number");

    if (budgetMinNum < 0) errors.push("budgetMin cannot be negative");
    if (budgetMaxNum < 0) errors.push("budgetMax cannot be negative");
    if (budgetMinNum > budgetMaxNum) errors.push("Minimum budget cannot exceed maximum budget");

    if (ageMinNum < 18) errors.push("ageMin must be at least 18");
    if (ageMaxNum < 18) errors.push("ageMax must be at least 18");
    if (ageMinNum > ageMaxNum) errors.push("Minimum age cannot exceed maximum age");

    // Validate move-in date
    const moveInDateObj = new Date(moveInDate);
    if (isNaN(moveInDateObj.getTime())) {
      errors.push("Invalid move-in date format");
    } else if (moveInDateObj < new Date()) {
      errors.push("Move-in date must be in the future");
    }

    // Validate gender
    const validGenders = ['MALE', 'FEMALE', 'ANY'];
    if (!validGenders.includes(preferredGender)) {
      errors.push(`preferredGender must be one of: ${validGenders.join(', ')}`);
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation errors",
        errors
      });
    }

    // Create flatmate post
    const newFlatmate = await prisma.flatmatePost.create({
      data: {
        user: { connect: { id: user.id } },
        
        city,
        budgetMin: budgetMinNum,
        budgetMax: budgetMaxNum,
        ageMin: ageMinNum,
        ageMax: ageMaxNum,
        preferredGender,
        moveInDate: moveInDateObj,
        occupation,
        habits,
        description
      }
    });

    return res.status(201).json({
      success: true,
      message: "Flatmate profile created successfully",
      data: newFlatmate
    });

  } catch (error) {
    console.error("Flatmate creation error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
