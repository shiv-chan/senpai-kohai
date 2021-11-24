import User from "../models/userModels.js";
import { userValidationForForgotPw } from "../validation.js";
import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";

const emailInfo = (emailInfo) => {
  console.log("miyabiiiii");
  return {
    from: "info.senpai.kohai@gmail.com",
    to: "info.senpai.kohai@gmail.com",
    subject: "[Senpai Kohai] Reset your password",
    text: `Reset your password from this link: http://localhost:5000/forgotpassword/reset/${emailInfo.id}`,
  };
};

export const sendResetPwEmail = async (req, res) => {
  // const transporter = nodemailer.createTransport(
  //   sendgridTransport({
  //     auth: {
  //       api_key: process.env.SENDGRID_API_KEY,
  //     },
  //   })
  // );
  const transportWithGmail = nodemailer.createTransport({
    service: "gmail",
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
      transportWithGmail.sendMail(emailInfo(req.body), (error, info) => {
        // transporter.sendMail(emailInfo(req.body), (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Message sent: " + info.response);
        }
      });
      res.status(201).json({ message: "email sent!" });
    } else {
      res.status(403).json({ message: `${email} is not registered` });
      // console.log(`${email} is not registered`);
      console.log(res.status(403));
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
