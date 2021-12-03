import User from '../../models/userModels.js';
import forgotPwUser from '../../models/forgotPwUserModels.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const updatePassword = async (req, res) => {
  console.log(req.body);
  const hasheduserid = req.params.hasheduserid;
  const { password, confirmedPassword } = req.body;
  const decodedUserId = jwt.verify(hasheduserid, process.env.TOKEN_SECRET);
  console.log(decodedUserId);

  try {
    const saltPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltPassword);
    await User.updateOne(
      { _id: decodedUserId },
      { password: hashedPassword }
    ).exec();
    const user = await forgotPwUser.findOne({ userId: decodedUserId });
    // console.log(user);
    await forgotPwUser.deleteOne({ _id: user._id });
    res.status(201).json({ message: 'password updated!' });
    console.log('password updated!');
  } catch (error) {
    console.log(error);
  }
  return;
};
