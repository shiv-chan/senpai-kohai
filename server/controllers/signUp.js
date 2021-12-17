import User from '../models/userModels.js';
import jwt from 'jsonwebtoken';
import handleErrors from '../utils/handleErrors.js';

export const signUp_post = async (req, res) => {
	const { email, password } = req.body;

	const signedUser = new User({
		email,
		password,
	});

	try {
		const user = await User.findOne({ email }).exec();
		if (user) {
			res.status(409).json({ message: 'This email is already registered' });
		} else {
			const newUser = await signedUser.save();
			// create and assign a token
			const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECRET);
			res.cookie('access_token', token, {
				httpOnly: true,
				// secure: true  // --> uncomment on production
			});
			res.status(201).json({ message: 'Signed up successfully!' });
		}
	} catch (error) {
		const message = handleErrors(error);
		res.status(409).json({ message });
	}
};
