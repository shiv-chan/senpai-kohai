import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	// test tailwind
	return (
		<>
			{location.pathname === '/signup' ||
			location.pathname === '/login' ||
			location.pathname === '/forgotpassword' ||
			location.pathname === '/forgotpassword/message' ||
			location.pathname === '/forgotpassword/reset' ? null : (
				<div className='bg-header_color text-white h-laptopHeaderHeight w-full fixed top-0'>
					This is Header
				</div>
			)}
		</>
	);
};

export default Header;
