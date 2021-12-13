import forgotPwUser from '../../models/forgotPwUserModels.js';
import moment from 'moment';
import jwt from 'jsonwebtoken';

export const verifyUrl = async (req, res) => {
  const timeAccessedToUrlAt = moment().utc().valueOf();
  const hasheduserid = req.params.hasheduserid;
  console.log(`hashed user id in verify url: ${hasheduserid}`);
  const decodedUserId = jwt.verify(hasheduserid, process.env.TOKEN_SECRET);
  try {
    const forgotPasswordUser = await forgotPwUser.findOne({
      userId: decodedUserId,
    });
    console.log(forgotPasswordUser);
    // 900000ms = 15min see how much time passed
    const timePassed = timeAccessedToUrlAt - forgotPasswordUser.urlCreatedAt;
    if (forgotPasswordUser && timePassed < 900000) {
      res.status(201).json({ message: 'url still valid!' });
      console.log('url still valid!');
    } else {
      res.status(403).json({ message: 'uh oh url is already expired' });
      console.log('uh-oh, url is already expired');
      forgotPasswordUser &&
        (await forgotPwUser.deleteOne({ _id: forgotPasswordUser._id }));
    }
  } catch (error) {
    res.status(403).json({ message: 'This is an invalid URL' });
    console.error(error);
  }
  return;
};
