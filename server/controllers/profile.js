import User from '../models/userModels.js';
import jwt from 'jsonwebtoken';

export const porfile_put = (profileType) => async (req, res) => {
	const { name, publicEmail, isActive, description, techStack } = req.body;

	try {
		const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
		const updatedUser = await User.updateOne(
			{ _id: decoded },
			{
				name,
				publicEmail,
				[profileType]: {
					isActive,
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

export const profile_get = (profileType) => async (req, res) => {
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
