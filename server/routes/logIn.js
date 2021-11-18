import express from 'express';
import { post_login } from '../controllers/logIn.js';

const router = express.Router();
router.post('/', post_login);

export default router;
