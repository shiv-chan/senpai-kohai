import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { checkValidToken } from '../authorizationSlice';
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { getUsers } from '../usersSlice';
import { getProfile } from '../myProfileSlice';
import Header from './Header';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const hasValidToken = useAppSelector(
		(state) => state.authorization.hasValidToken
	);
	const dispatch = useAppDispatch();
	const location = useLocation();

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getProfile());
	}, [dispatch]);

	if (hasValidToken === undefined) {
		dispatch(checkValidToken());
	}

	if (hasValidToken === false) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return hasValidToken ? (
		<>
			<Header />
			{children}
		</>
	) : null;
};

export default RequireAuth;
