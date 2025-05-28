import express from "express";
import {
  sendMailToFlatmate,
  sendMailToFlatOwner,
} from "../../controllers/user_controller/mail_controller.js";

const router = express.Router();

router.post("/send-to-owner", sendMailToFlatOwner);
router.post("/send-to-flatmate", sendMailToFlatmate);

export default router;
