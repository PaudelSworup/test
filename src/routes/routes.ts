import express from "express";
import { Demo } from "../controllers/controllers";

const router = express.Router();

router.get("/", Demo);

export default router;
