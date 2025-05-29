import { prisma } from "../../db/db.js";

export const getAllFlats = async (req, res) => {
  try {
    const flats = await prisma.flat.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "All flats fetched successfully",
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

export const getFlatBySearch = async (req, res) => {
  const { location, minPrice, maxPrice } = req.query;

  try {
    if (!location || !minPrice || !maxPrice) {
      return res.status(400).json({
        success: false,
        message: "Please provide location, minPrice, and maxprice",
      });
    }

    const flats = await prisma.flat.findMany({
      where: {
        AND: [
          {
            OR: [
              { city: { contains: location, mode: "insensitive" } },
              { address: { contains: location, mode: "insensitive" } },
            ],
          },
          {
            rent: {
              gte: Number(minPrice),
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
      message: "Flats matching search criteria fetched successfully",
      data: flats,
    });
  } catch (error) {
    console.error("Error searching flats:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const getUserFlats = async (req, res) => {
  try {
    const userId = req.user.id; // From your middleware

    const flats = await prisma.flat.findMany({
      where: {
        postedById: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        postedBy: {
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
      message: "User flats fetched successfully",
      data: flats,
    });
  } catch (error) {
    console.error("Error fetching user flats:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};


export const deleteFlat = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Verify the flat belongs to the user
    const flat = await prisma.flat.findUnique({
      where: { id },
    });

    if (!flat || flat.postedById !== userId) {
      return res.status(403).json({
        success: false,
        message: "You can only delete your own flats",
      });
    }

    await prisma.flat.delete({
      where: { id },
    });

    return res.status(200).json({
      success: true,
      message: "Flat deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting flat:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};