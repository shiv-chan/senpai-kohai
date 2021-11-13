import express from 'express';
const router = express.Router();
import { createProfile, getProfile } from '../controllers/profile.js';

router.post('/setting/senpai', createProfile('senpaiProfile'));
router.post('/setting/kohai', createProfile('kohaiProfile'));
router.get('/senpai', getProfile('senpaiProfile'));
router.get('/kohai', getProfile('kohaiProfile'));

export default router;
