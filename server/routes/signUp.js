import express from "express";
const router = express.Router();
import { createUser } from "../controllers/signUp.js";

router.post("/", createUser);

export default router;
