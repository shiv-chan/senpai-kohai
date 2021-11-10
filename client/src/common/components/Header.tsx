import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	// test tailwind
	return <div className="bg-header_color text-white flex justify-between items=center p-6" >
				<div className="flex-grow text-3xl">
					<Link to="/">
						Senpai-Kohai
					</Link>
				</div>
				<div className="text-xl p-2 box-border border-2 rounded-full">
					<Link to="/">Login</Link>
				</div>
				<div className="bg-primary_bg_color text-header_color text-xl p-2 box-border border-2 rounded-full">
					<Link to="/">Sign up</Link>
				</div>

	</div>;

};

export default Header;
