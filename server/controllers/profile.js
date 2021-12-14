import User from '../models/userModels.js';
import jwt from 'jsonwebtoken';
import validator from 'validator';

export const porfile_put = (profileType) => async (req, res) => {
	const {
		name,
		publicEmail,
		profileImage,
		profileImageId,
		isActive,
		description,
		techStack,
	} = req.body;
	const token = req.cookies.access_token;

	try {
		if (!validator.isEmail(publicEmail))
			throw new Error('Please enter a valid email');
		const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
		const targetUser = await User.findOne({ _id: decoded._id });
		const updatedUser = await User.updateOne(
			{ _id: decoded },
			{
				name,
				publicEmail,
				profileImage,
				profileImageId,
				[profileType]: {
					id: targetUser[profileType].id,
					isActive,
					description,
					techStack,
				},
			}
		).exec();
		res.status(201).json(updatedUser);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const profile_toggle_put = (profileType) => async (req, res) => {
	const { isActive } = req.body;
	const token = req.cookies.access_token;

	try {
		const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
		const targetUser = await User.findOne({ _id: decoded._id });
		const prevProfileObject = await targetUser[profileType].toObject();
		const updatedUser = await User.updateOne(
			{ _id: decoded },
			{
				[profileType]: {
					...prevProfileObject,
					isActive,
				},
			}
		).exec();
		res.status(201).json(updatedUser);
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
		res.status(201).json(profile);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
