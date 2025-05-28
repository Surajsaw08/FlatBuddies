// controllers/userController.
import { prisma } from "../../db/db.js";
export const updateUserProfile = async (req, res) => {
  const { id } = req.user;
  const { username, email, phone, gender, age } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        username,
        email,
        phone,
        gender,
        age: Number(age),
      },
    });

    return res.status(200).json({
      message: "Profile updated successfully",
      user: {
        username: updatedUser.username,
        email: updatedUser.email,
        phone: updatedUser.phone,
        gender: updatedUser.gender,
        age: updatedUser.age,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update profile" });
  }
};
