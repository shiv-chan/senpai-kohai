import User from '../models/userModels.js';
import { userValidationForForgotPw } from '../validation.js';

export const sendResetPwEmail = async (req, res) => {
  const { email } = req.body;
  const { error } = userValidationForForgotPw(req.body);
  if (error) return res.status(409).send({ message: error.details[0].message });

  try {
    const user = await User.findOne({ email }).exec();
    console.log(user);
    if (user) {
      console.log('email function executed here!');
    } else {
      res.status(403).json({ message: `${email} is not registered` });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
