import {
  deleteFlat,
  getAllFlats,
  getFlatBySearch,
  getUserFlats,
} from "../../controllers/user_controller/flat_controller.js";
import express from "express";
import UserMiddleware from "../../middleware/user_middleware.js";

const router = express.Router();

router.get("/", getAllFlats);
router.get("/search", getFlatBySearch);
router.get("/user", UserMiddleware, getUserFlats);
router.delete("/:id", UserMiddleware, deleteFlat);

export default router;
