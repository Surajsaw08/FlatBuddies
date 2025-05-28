import express from 'express';
import { create_flate } from '../../controllers/user_controller/create_flat.js';

const router = express.Router();
router.post("/",create_flate);

export default router;