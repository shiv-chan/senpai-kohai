import User from '../../models/userModels.js';
import forgotPwUser from '../../models/forgotPwUserModels.js';
import { userValidationForForgotPw } from '../../validation.js';
import moment from 'moment';
import jwt from 'jsonwebtoken';

export const verifyUrl = async (req, res) => {
  const timeAccessedToUrlAt = moment().utc().valueOf();
  console.log(timeAccessedToUrlAt);
  const { hasheduserid } = req.body;
  // console.log(hasheduserid);
  const decodedUserId = jwt.verify(hasheduserid, process.env.TOKEN_SECRET);
  // console.log(decodedUserId);
  try {
    const user = await forgotPwUser.findOne({ userId: decodedUserId });
    console.log(user);
    // 900000ms = 15min
    const timePassed = user ? timeAccessedToUrlAt - user.urlCreatedAt : 900000;
    if (user && timePassed < 900000) {
      res.status(201).json({ message: 'url still valid!' });
    } else {
      res.status(403).json({ message: 'uh oh url is already expired' });
      console.log('uh oh url is already expired');
    }
  } catch (error) {
    console.log(error);
  }
  return;
};
