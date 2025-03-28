import express from "express";
import { Demo } from "../controllers/controllers";
import { createAccount } from "../controllers/userController";

const router = express.Router();

router.get("/", Demo);

export default router;
