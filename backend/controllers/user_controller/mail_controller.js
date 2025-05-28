import { prisma } from "../../db/db.js";
import nodemailer from "nodemailer";
import "dotenv/config";
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// mail_controller.js
export const sendMailToFlatOwner = async (req, res) => {
  try {
    console.log("Received mail request:", req.body); // Add this line

    const { interestedUser, flatOwnerEmail, flatDetails } = req.body;

    if (!interestedUser || !flatOwnerEmail || !flatDetails) {
      console.log("Missing required fields");
      return res.status(400).json({
        success: false,
        message:
          "All fields are required: interestedUser, flatOwnerEmail, flatDetails",
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: flatOwnerEmail,
      subject: `New Interest in Your Flat: ${flatDetails.title}`,
      html: `
        <h2>New Interest in Your Flat</h2>
        <p>${interestedUser.username} is interested in your flat at ${
        flatDetails.address
      }, ${flatDetails.city}</p>
        <h3>Contact Details:</h3>
        <ul>
          <li>Name: ${interestedUser.username}</li>
          <li>Email: ${interestedUser.email}</li>
          <li>Phone: ${interestedUser.phone || "Not provided"}</li>
          <li>Age: ${interestedUser.age || "Not provided"}</li>
        </ul>
      `,
    };

    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    res.status(200).json({
      success: true,
      message: "Notification sent successfully",
    });
  } catch (error) {
    console.error("Full error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to send notification",
      errorDetails: error.toString(), // Include more error details
    });
  }
};

export const sendMailToFlatmate = async (req, res) => {
  try {
    const { interestedUser, flatmateEmail } = req.body;

    if (!interestedUser || !flatmateEmail) {
      return res.status(400).json({
        success: false,
        message: "Interested user details and flatmate email are required",
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: flatmateEmail,
      subject: `New Interest in Your Flatmate Post`,
      html: `
        <h2>Hello Flatmate!</h2>
        <p>${interestedUser.username} is interested in your flatmate post.</p>
        <p>Here are their contact details:</p>
        <ul>
          <li>Name: ${interestedUser.username}</li>
          <li>Email: ${interestedUser.email}</li>
          <li>Phone: ${interestedUser.phone || "Not provided"}</li>
          <li>Age: ${interestedUser.age || "Not provided"}</li>
        </ul>
        <p>Please contact them at your earliest convenience.</p>
        <p>Best regards,<br/>FlatBuddies Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Interest notification sent to flatmate successfully",
    });
  } catch (error) {
    console.error("Error sending mail to flatmate:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send interest notification",
    });
  }
};
