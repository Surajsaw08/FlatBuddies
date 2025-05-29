import express from "express";

import {
  deleteFlatmate,
  getAllFlatmates,
  getFlatmateBySearch,
  getUserFlatmates,
} from "../../controllers/user_controller/flatmate_controller.js";
import UserMiddleware from "../../middleware/user_middleware.js";

const router = express.Router();

router.get("/", getAllFlatmates);
router.get("/search", getFlatmateBySearch);
router.get("/user", UserMiddleware, getUserFlatmates);
router.delete("/:id", UserMiddleware, deleteFlatmate);

export default router;
