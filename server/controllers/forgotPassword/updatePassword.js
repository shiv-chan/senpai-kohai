import User from '../../models/userModels.js';
import forgotPwUser from '../../models/forgotPwUserModels.js';
import moment from 'moment';
import jwt from 'jsonwebtoken';

export const updatePassword = async (req, res) => {
  console.log(req.body);
  const { password, confirmedPassword, hasheduserid } = req.body;
  const decodedUserId = jwt.verify(hasheduserid, process.env.TOKEN_SECRET);
  try {
    // const user = await User.findOne({ userId: decodedUserId });
    await User.updateOne({ _id: decodedUserId }, { password }).exec();
    const user = await forgotPwUser.findOne({ userId: decodedUserId });
    console.log(user);
    await forgotPwUser.deleteOne({ _id: user._id });
    res.status(201).json({ message: 'password updated!' });
    console.log('password updated!');
  } catch (error) {
    console.log(error);
  }
  return;
};
