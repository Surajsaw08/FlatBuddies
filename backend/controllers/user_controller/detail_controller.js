import { prisma } from "../../db/db.js";

export const getUserDetails = async (req, res) => {
  const { id } = req.user;

  // Input validation
  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        username: true,
        email: true,
        phone: true,
        gender: true,
        age: true,
        // Add other fields you want to expose
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Clean response structure
    return res.status(200).json({
      success: true,
      data: {
        username: user.username,
        email: user.email,
        phone: user.phone || null, // Explicit null for undefined
        gender: user.gender || null,
        age: user.age || null,
      },
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
