import express from 'express';
const router = express.Router();
import { users_get } from '../controllers/users.js';

router.get('/', users_get);

export default router;
