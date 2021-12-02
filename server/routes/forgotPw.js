import express from 'express';
import { sendResetPasswordEmail } from '../controllers/forgotPassword/forgotPassword.js';
import { updatePassword } from '../controllers/forgotPassword/updatePassword.js';
import { verifyUrl } from '../controllers/forgotPassword/verifyUrl.js';
const app = express();

app.use('/reset/:id', (req, res, next) => {
  console.log('Request Id:', req.params.id);
  next();
});

const router = express.Router();
router.post('/', sendResetPasswordEmail);
router.get('/reset/:id', verifyUrl);
router.post('/reset/:id/sent', updatePassword);

export default router;
