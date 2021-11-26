import express from 'express';
import { login_post } from '../controllers/logIn.js';

const router = express.Router();
router.post('/', login_post);

export default router;
