import User from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const sendUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email }).exec();
		if (user) {
			await bcrypt.compare(password, user.password, (error, result) => {
				if (error) {
					throw new Error(error);
				}
				if (result) {
					// 201 request succeeded, and resource created and returend

					// create and assign a token
					const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
					res.cookie('accrss_token', token, {
						httpOnly: true,
						// secure: true  // --> uncomment on production
					});
					res.status(201).json({ message: 'logged in successfully!' });
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
