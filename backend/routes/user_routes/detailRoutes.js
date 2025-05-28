import express from "express";
import { getUserDetails } from "../../controllers/user_controller/detail_controller.js";
import { updateUserProfile } from "../../controllers/user_controller/updateProfile.js";

const router = express.Router();

router.get("/", getUserDetails);
router.put("/update", updateUserProfile);

export default router;
