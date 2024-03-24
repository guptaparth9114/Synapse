import express from "express"
import { donor } from "../controllers/donor.js";
const router=express.Router();
router.post("/register",donor)

export default router;