import { prisma } from "../../db/db.js";

export const flatmateOwner = async (req, res) => {
  try {
    const flat = await prisma.flatmatePost.findUnique({
      where: { id: req.params.id },
      include: {
        user: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    });

    if (!flat) {
      return res.status(404).json({ message: "Flatmate not found" });
    }

    res.json({ data: flat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching flatmate details" });
  }
};
