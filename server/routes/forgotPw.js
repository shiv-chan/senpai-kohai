import express from 'express';
import { sendResetPwEmail } from '../controllers/forgotPw.js';
// import { updatePassword } from '../controllers/forgotPw.js';

const router = express.Router();
router.post('/', sendResetPwEmail);
// router.post('/', updatePassword);

export default router;
