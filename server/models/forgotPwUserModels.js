import mongoose from 'mongoose';

const forgotPwUserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  urlCreatedAt: {
    type: String,
    required: true,
  },
});
const forgotPwUser = mongoose.model('forgotPwUser', forgotPwUserSchema);

export default forgotPwUser;
