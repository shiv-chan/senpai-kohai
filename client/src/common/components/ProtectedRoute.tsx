import React, { useLayoutEffect, useState } from 'react';
import { Route, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute: React.FunctionComponent<{
	path: string;
	element: React.ReactElement;
}> = ({ path, element }) => {
	const navigate = useNavigate();
	const [hasValidToken, setHasValidToken] = useState<boolean | undefined>(
		undefined
	);

	// check the valid token
	useLayoutEffect(() => {
		console.log('protected route comp');
		axios
			.get('http://localhost:5000/authorization', {
				withCredentials: true,
			})
			.then((response) => {
				setHasValidToken(true);
				console.log('valid token!');
			})
			.catch((error) => {
				if (error.response.data.message) {
					console.error(error.response.data.message);
				} else {
					console.error(`Error: ${error}`);
				}
				setHasValidToken(false);
				navigate('/login');
			});
	}, [navigate]);

	console.log(hasValidToken);

	return (
		<>
			{hasValidToken ? (
				<Route path={path} element={element} />
			) : (
				<Navigate to="/login" />
			)}
		</>
	);
};

export default ProtectedRoute;
