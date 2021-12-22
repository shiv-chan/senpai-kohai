export const logout_get = (req, res) => {
	try {
		res.clearCookie('access_token', {
			httpOnly: true,
			secure: true,
			sameSite: 'None',
		});
		res.status(201).json({ message: 'Logged out successfully!' });
	} catch (error) {
		res.status(409).json({ message: 'Failed to logout...' });
	}
};
