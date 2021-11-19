import User from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userValidation } from '../validation.js';

export const signUp_post = async (req, res) => {
	const { email, password } = req.body;

	// validate the data before send data
	const { error } = userValidation(req.body);
	if (error) return res.status(409).send({ message: error.details[0].message });

	// encrypt the password
	const saltPassword = await bcrypt.genSalt(10);
	const securePassword = await bcrypt.hash(password, saltPassword);

	const signedUser = new User({
		email,
		password: securePassword,
	});

	try {
		const user = await User.findOne({ email }).exec();
		if (user) {
			res.status(409).send({ message: 'This email is already registered' });
		} else {
			await signedUser.save();
			// create and assign a token
			const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
			res.cookie('access_token', token, {
				httpOnly: true,
				// secure: true  // --> uncomment on production
			});
			res.status(201).json(signedUser);
		}
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
