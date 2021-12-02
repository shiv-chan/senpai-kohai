import User from '../models/userModels.js';
import jwt from 'jsonwebtoken';

export const users_get = async (req, res) => {
	const token = req.cookies.access_token;

	if (token) {
		try {
			const decodedToken = await jwt.verify(token, process.env.TOKEN_SECRET);
			// console.log(decodedToken);

			const allUsers = await User.find({}).exec();
			if (allUsers) {
				res.status(201).json({ allUsers, _id: decodedToken._id });
			} else {
				res.status(409).json({ message: 'no data found!' });
			}
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	} else {
		res.status(409).json({ message: 'jwt must be provided.' });
	}
};
