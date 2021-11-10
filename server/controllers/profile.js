import User from '../models/userModels.js';
import jwt from 'jsonwebtoken';

export const createProfile = (profileType) => async (req, res) => {
	const { publicEmail, description, techStack } = req.body;
	const token = req.cookies.access_token;

	try {
		const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
		const updatedUser = await User.updateOne(
			{ _id: decoded },
			{
				publicEmail,
				[profileType]: {
					description,
					techStack,
				},
			}
		).exec();
		res.status(201).send(updatedUser);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const getProfile = (profileType) => async (req, res) => {
	const token = req.cookies.access_token;

	try {
		const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
		const user = await User.findOne({ _id: decoded }).exec();
		const profile = user[profileType];
		res.status(201).send(profile);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
