import User from '../../models/userModels.js';
import forgotPwUser from '../../models/forgotPwUserModels.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

export const updatePassword = async (req, res) => {
  // console.log(req.body);
  const hasheduserid = req.params.hasheduserid;
  const { password, confirmedPassword } = req.body;
  const decodedUserId = jwt.verify(hasheduserid, process.env.TOKEN_SECRET);
  // console.log(decodedUserId);

  try {
    // validate here on backend too just in case
    if (password !== confirmedPassword) {
      throw new Error('the password are not exactly the same');
    } else if (
      !validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      throw new Error('the password are not exactly the same');
    }
    const saltPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltPassword);
    const runValidatorOption = { runValidators: true };
    await User.updateOne(
      { _id: decodedUserId },
      { password: hashedPassword },
      runValidatorOption
    ).exec();
    const forgotPasswordUser = await forgotPwUser.findOne({
      userId: decodedUserId,
    });
    // console.log(user);
    await forgotPwUser.deleteOne({ _id: forgotPasswordUser._id });
    res.status(201).json({ message: 'password updated!' });
    console.log('password updated!');
  } catch (error) {
    console.log(error);
  }
  return;
};
