import User from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login_post = async (req, res) => {
	const { email, password } = req.body;

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
					res.set({
						'Access-Control-Allow-Credentials': true,
						'Access-Control-Allow-Origin': [
							'https://senpai-kohai.herokuapp.com',
						],
					});
					res.cookie('access_token', token, {
						httpOnly: true,
						secure: true,
						sameSite: 'None',
					});

					// 201 request succeeded, and resource created and returend
					res.status(201).json({ message: 'Logged in successfully!' });
				} else {
					res
						.status(403) // forbidden error... you don't have an access to browse the page
						.json({ message: 'Either email or password is invalid' });
				}
			});
		} else {
			res.status(403).json({ message: 'Either email or password is invalid' });
		}
	} catch (error) {
		// 409 conflict happened in resources
		res.status(409).json({ message: error.message });
	}
};
