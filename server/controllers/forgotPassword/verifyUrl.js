import forgotPwUser from '../../models/forgotPwUserModels.js';
import moment from 'moment';
import jwt from 'jsonwebtoken';

export const verifyUrl_get = async (req, res) => {
  const timeAccessedToUrlAt = moment().utc().valueOf();
  const hasheduserid = req.params.hasheduserid;

  try {
    const decodedUserId = jwt.verify(hasheduserid, process.env.TOKEN_SECRET);
    console.log(decodedUserId);
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
      res.status(403).json({ message: 'Uh-oh, the url is already expired!' });
      forgotPasswordUser &&
        (await forgotPwUser.deleteOne({ _id: forgotPasswordUser._id }));
    }
  } catch (error) {
    res.status(403).json({ message: 'This is an invalid URL' });
    console.error(error);
  }
  return;
};
