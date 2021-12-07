import express from 'express';
import { sendResetPasswordEmail_post } from '../controllers/forgotPassword/forgotPassword.js';
import { updatePassword_put } from '../controllers/forgotPassword/updatePassword.js';
import { verifyUrl_get } from '../controllers/forgotPassword/verifyUrl.js';
const app = express();

app.use('/reset/:hasheduserid', (req, res, next) => {
  console.log('Request Id:', req.params.hasheduserid);
  next();
});

const router = express.Router();
router.post('/', sendResetPasswordEmail_post);
router.get('/reset/:hasheduserid', verifyUrl_get);
router.put('/reset/:hasheduserid/send', updatePassword_put);

export default router;
