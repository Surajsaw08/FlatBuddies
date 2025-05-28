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
