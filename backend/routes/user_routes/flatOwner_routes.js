import express from "express";

import { flatOwner } from "../../controllers/user_controller/flatOwner_controller.js";

const router = express.Router();

router.get("/:id", flatOwner);

export default router;
