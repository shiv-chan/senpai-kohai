import express from 'express';
const router = express.Router();
import { put_porfile, get_profile } from '../controllers/profile.js';

router.put('/setting/senpai', put_porfile('senpaiProfile'));
router.put('/setting/kohai', put_porfile('kohaiProfile'));
router.get('/senpai', get_profile('senpaiProfile'));
router.get('/kohai', get_profile('kohaiProfile'));

export default router;
