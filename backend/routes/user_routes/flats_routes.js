import {
  getAllFlats,
  getFlatBySearch,
} from "../../controllers/user_controller/flat_controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllFlats);
router.get("/search", getFlatBySearch);

export default router;
