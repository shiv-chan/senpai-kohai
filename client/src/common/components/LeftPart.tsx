import React from 'react';
import { useLocation } from 'react-router-dom';

const LeftPart: React.FC = () => {
	const location = useLocation();
	return (
		<section className="flex flex-col justify-center items-center w-1/2 h-full bg-white">
			<div className="h-9/12">
				<p className="flex-initial text-5xl mb-16">Let's Get Started</p>
				{location.pathname === '/signup' && (
					<img src="./assets/terms.svg" alt="terms" className="w-80 mb-16" />
				)}
				{location.pathname === '/login' && (
					<img
						src="./assets/shared_workspace.svg"
						alt="terms"
						className="w-80 mb-16"
					/>
				)}
				{location.pathname === '/forgotpassword' && (
					<img src="./assets/password.svg" alt="terms" className="w-80 mb-16" />
				)}
				<p className="flex-initial text-2xl">Find your guide, Support youngs</p>
			</div>
		</section>
	);
};

export default LeftPart;