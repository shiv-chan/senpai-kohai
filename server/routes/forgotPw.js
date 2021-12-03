import express from 'express';
import { sendResetPasswordEmail } from '../controllers/forgotPassword/forgotPassword.js';
import { updatePassword } from '../controllers/forgotPassword/updatePassword.js';
import { verifyUrl } from '../controllers/forgotPassword/verifyUrl.js';
const app = express();

app.use('/reset/:hasheduserid', (req, res, next) => {
  console.log('Request Id:', req.params.id);
  next();
});

const router = express.Router();
router.post('/', sendResetPasswordEmail);
router.post('/reset/:hasheduserid', verifyUrl);
router.put('/reset/:id/send', updatePassword);

export default router;
