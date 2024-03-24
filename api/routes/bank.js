import express from "express"
import { bbregister, getbbank } from "../controllers/bank.js";
const router=express.Router();
router.post("/bbregister",bbregister)
router.get("/bbanks",getbbank)
export default router;