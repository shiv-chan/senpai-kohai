import express from "express";
import { sendUser } from "../controllers/logIn.js";

const router = express.Router();
router.post("/", sendUser);

export default router;
