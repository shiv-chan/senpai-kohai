import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const Header = () => {
	const [isOpen, setOpen] = useState(false);

	const menuStyle = () => {
		return isOpen
			? { height: '30vh', transform: 'translateY(0%)' }
			: { height: '30vh', transform: 'translateY(-120%)' };
	};

	return (
		<>
			<header className="bg-header_color w-screen h-mobileHeaderHeight md:h-laptopHeaderHeight fixed z-10">
				<div className="flex items-center	font-sans text-primary_bg_color h-full mx-4">
					<Link to="/" className="italic font-bold flex-grow self-center">
						Senpai-Kohai
					</Link>
					<div className="flex items-center gap-1 relative">
						<button className="self-center border-2 border-solid	border-primary_bg_color rounded-full px-5 text-sm	">
							Log out
						</button>
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							size={20}
							distance="lg"
							rounded
						/>
					</div>
				</div>
			</header>
			<div
				className="w-screen bg-tertiary_bg_color absolute top-mobileHeaderHeight flex justify-center items-center transition duration-500 ease-linear transform"
				style={menuStyle()}
			>
				<ul className="text-header_color font-sans font-bold flex flex-col gap-y-4 text-xl">
					<Link to="/board">
						<li>Browsing Peeps</li>
					</Link>
					<Link to="/profile/senpai">
						<li>My Profile as Senpai</li>
					</Link>
					<Link to="/profile/kohai">
						<li>My Profile as Kohai</li>
					</Link>
				</ul>
			</div>
		</>
	);
};

export default Header;
