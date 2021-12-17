import express from 'express';
const router = express.Router();
import { signUp_post } from '../controllers/signUp.js';

router.post('/', signUp_post);

export default router;
