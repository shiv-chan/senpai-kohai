import jwt from 'jsonwebtoken';

export const authorization_get = async (req, res) => {
	const token = req.cookies.access_token;

	// check json web token exists & is verified
	if (token) {
		try {
			const decodedToken = await jwt.verify(token, process.env.TOKEN_SECRET);
			res.status(201).json({ _id: decodedToken._id });
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	} else {
		res.status(409).json({ message: 'jwt must be provided' });
	}
};
