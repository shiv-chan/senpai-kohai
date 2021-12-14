import express from 'express';
import { sendResetPasswordEmail } from '../controllers/forgotPassword/forgotPassword.js';
import { updatePassword } from '../controllers/forgotPassword/updatePassword.js';
import { verifyUrl } from '../controllers/forgotPassword/verifyUrl.js';
const app = express();

const router = express.Router();
router.post('/', sendResetPasswordEmail);
router.get('/reset/:hasheduserid', verifyUrl);
router.put('/reset/:hasheduserid/send', updatePassword);

export default router;
