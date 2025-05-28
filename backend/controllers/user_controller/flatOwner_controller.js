import { prisma } from "../../db/db.js";
export const flatOwner = async (req, res) => {
  try {
    const flat = await prisma.flat.findUnique({
      where: { id: req.params.id },
      include: {
        postedBy: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    });

    if (!flat) {
      return res.status(404).json({ message: "Flat not found" });
    }

    res.json({ data: flat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching flat details" });
  }
};
