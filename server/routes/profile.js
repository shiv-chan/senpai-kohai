import express from 'express';
const router = express.Router();
import { porfile_put, profile_get } from '../controllers/profile.js';

router.put('/setting/senpai', porfile_put('senpaiProfile'));
router.put('/setting/kohai', porfile_put('kohaiProfile'));
router.get('/senpai', profile_get('senpaiProfile'));
router.get('/kohai', profile_get('kohaiProfile'));

export default router;
