import express from 'express';
import { authorization_get } from '../controllers/authorization.js';

const router = express.Router();

router.get('/', authorization_get);

export default router;
