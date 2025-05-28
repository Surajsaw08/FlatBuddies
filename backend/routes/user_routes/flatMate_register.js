import express from "express";

import { create_flateMate } from "../../controllers/user_controller/create_flatMate.js";

const router =express.Router();
router.post("/",create_flateMate);

export default router;
