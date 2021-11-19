import jwt from 'jsonwebtoken';

const requireAuth = (req, res, next) => {
	const token = req.cookies.access_token;

	// check json web token exists & is verified
	if (token) {
		try {
			const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
			res.send(decodedToken);
			next();
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	} else {
		res.status(409).json({ message: 'jwt must be provided' });
	}
};

export default requireAuth;
