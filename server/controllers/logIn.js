import User from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userValidation } from '../validation.js';

export const login_post = async (req, res) => {
	const { email, password } = req.body;

	// validate the data before send data
	const { error } = userValidation(req.body);
	if (error) return res.status(409).send({ message: error.details[0].message });

	try {
		const user = await User.findOne({ email }).exec();
		if (user) {
			await bcrypt.compare(password, user.password, (error, result) => {
				if (error) {
					throw new Error(error);
				}
				if (result) {
					// create and assign a token
					const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
					res.cookie('access_token', token, {
						httpOnly: true,
						// secure: true  // --> uncomment on production
					});

					// 201 request succeeded, and resource created and returend
					res.status(201).json({ message: 'Logged in successfully!' });
				} else {
					res
						.status(403) // forbidden error... you don't have an access to browse the page
						.json({ message: 'Either email or password is invalid' });
				}
			});
		}
	} catch (error) {
		// 409 conflict happened in resources
		res.status(409).json({ message: error.message });
	}
};
