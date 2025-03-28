import express from "express";

import { createAccount } from "../controllers/userController";

const router = express.Router();

router.post("/user/signup", createAccount);

export default router;
