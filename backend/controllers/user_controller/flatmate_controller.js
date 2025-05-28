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
