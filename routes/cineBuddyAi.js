import express from "express";
import { getAIResponse } from "../controllers/cineBuddy.js";

const router = express.Router();

router.post("/", getAIResponse);

export default router;