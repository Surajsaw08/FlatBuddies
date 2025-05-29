import { prisma } from "../../db/db.js";

export const getAllFlatmates = async (req, res) => {
  try {
    const flats = await prisma.flatmatePost.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "All flatmates fetched successfully",
      data: flats,
    });
  } catch (error) {
    console.error("Error fetching flats:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const getFlatmateBySearch = async (req, res) => {
  const { location, minPrice, maxPrice } = req.query;

  try {
    if (!location || !minPrice || !maxPrice) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields: location, minPrice, and maxPrice",
      });
    }

    const flatmates = await prisma.flatmatePost.findMany({
      where: {
        AND: [
          {
            city: {
              contains: location,
              mode: "insensitive",
            },
          },
          {
            budgetMin: {
              gte: Number(minPrice),
            },
          },
          {
            budgetMax: {
              lte: Number(maxPrice),
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Flatmates matching search criteria fetched successfully",
      data: flatmates,
    });
  } catch (error) {
    console.error("Error searching flatmates:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const getUserFlatmates = async (req, res) => {
  try {
    const userId = req.user.id; // From your middleware

    const flatmates = await prisma.flatmatePost.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: {
          select: {
            username: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "User flatmates fetched successfully",
      data: flatmates,
    });
  } catch (error) {
    console.error("Error fetching user flatmates:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const deleteFlatmate = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Verify the flatmate post belongs to the user
    const flatmate = await prisma.flatmatePost.findUnique({
      where: { id },
    });

    if (!flatmate || flatmate.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "You can only delete your own flatmate posts",
      });
    }

    await prisma.flatmatePost.delete({
      where: { id },
    });

    return res.status(200).json({
      success: true,
      message: "Flatmate post deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting flatmate post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
