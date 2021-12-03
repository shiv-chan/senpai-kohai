import User from '../../models/userModels.js';
import forgotPwUser from '../../models/forgotPwUserModels.js';
import { userValidationForForgotPw } from '../../validation.js';
import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import moment from 'moment';
import jwt from 'jsonwebtoken';

const emailInfo = (hashedUserId) => {
  return {
    from: 'info.senpai.kohai@gmail.com',
    to: 'info.senpai.kohai@gmail.com',
    subject: '[Senpai Kohai] Reset your password',
    // change this url before deploying
    text: `Reset your password from this link: http://localhost:3000/forgotpassword/reset/${hashedUserId}`,
  };
};

export const sendResetPasswordEmail = async (req, res) => {
  // const transporter = nodemailer.createTransport(
  //   sendgridTransport({
  //     auth: {
  //       api_key: process.env.SENDGRID_API_KEY,
  //     },
  //   })
  // );
  const transportWithGmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENPAI_KOHAI_EMAIL,
      pass: process.env.SENPAI_KOHAI_PASSWORD,
    },
  });
  const { email } = req.body;
  const { error } = userValidationForForgotPw(req.body);
  console.log(req.body);
  if (error) return res.status(409).send({ message: error.details[0].message });
  try {
    const user = await User.findOne({ email }).exec();
    console.log(user);
    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      const resetPwUser = new forgotPwUser({
        userId: user._id,
        email,
        // get utc time in milliseconds
        urlCreatedAt: moment().utc().valueOf(),
      });
      await resetPwUser.save();
      transportWithGmail.sendMail(emailInfo(token), (error, info) => {
        // transporter.sendMail(emailInfo(req.body), (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: ' + info.response);
        }
      });
      res.status(201).json({ message: 'email sent!' });
    } else {
      res.status(403).json({ message: `${email} is not registered` });
      // console.log(`${email} is not registered`);
      console.log(res.status(403));
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
