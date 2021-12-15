import express from 'express';
const router = express.Router();
import { logout_get } from '../controllers/logout.js';

router.get('/', logout_get);

export default router;
