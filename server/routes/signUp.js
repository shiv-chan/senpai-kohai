import express from 'express';
const router = express.Router();
import { post_signUp } from '../controllers/signUp.js';

router.post('/', post_signUp);

export default router;
