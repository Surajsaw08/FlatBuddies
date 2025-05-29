import express from "express";

import { flatmateOwner } from "../../controllers/user_controller/flatmateOwner_controller.js";

const router = express.Router();

router.get("/:id", flatmateOwner);

export default router;
