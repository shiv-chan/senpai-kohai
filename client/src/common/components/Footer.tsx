import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="flex justify-center items-center bg-header_color h-mobileHeaderHeight md:h-laptopHeaderHeight">
			<p className="text-primary_bg_color text-center text-xs">
				Copyright ©2021.{' '}
				<Link
					to="https://github.com/shiv-chan/senpai-kohai"
					className="font-bold underline"
				>
					Senpai Kohai
				</Link>{' '}
				All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer;
