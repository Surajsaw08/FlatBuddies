import express from "express";

import {
  getAllFlatmates,
  getFlatmateBySearch,
} from "../../controllers/user_controller/flatmate_controller.js";

const router = express.Router();

router.get("/", getAllFlatmates);
router.get("/search", getFlatmateBySearch);

export default router;
