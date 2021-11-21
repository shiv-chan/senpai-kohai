import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaTimes } from 'react-icons/fa';
// import { FaBars } from 'react-icons/fa';

const Header = () => {
	const [isClosed, setClosed] = useState(false);

	return (
		<div
			className="bg-header_color 
						text-white flex 
						justify-between 
						items=center 
						font-black 
						w-screen
						h-laptopHeaderHeight
						mobile_l_max:h-mobileHeaderHeight 
						p-4
						mx-auto
						"
		>
			<div
				className="flex-grow 
							text-3xl 
							w-screen
							mobile_l_max:text-sm
							"
			>
				<Link to="/">Senpai-Kohai</Link>
			</div>

			{/* <div className="text-base 
								box-border 
								border-2 
								w-20 
								rounded-full 
								cursor-pointer 
								font-base 
								hover:bg-primary_bg_color 
								mr-5 
								text-center">
					<Link to="/login">Login</Link>
				</div>
				<div className="bg-primary_bg_color text-header_color w-20 text-base box-border border-2 rounded-full cursor-pointer hover:bg-secondary_bg_color text-center">
					<Link to="/signup">Sign up</Link>
				</div> */}

			<div
				className="text-base
							box-border 
							border-2 w-24
							rounded-full 
							cursor-pointer 
							hover:bg-primary_bg_color 
							mr-10 text-center
							mobile_l_max:text-sm
							"
			>
				Sign Out
			</div>

			<main className="">
				<header className="bg-header_color h-10 flex items-center justify-center">
					{isClosed ? (
						<button
							className="w-12 mb-2"
							aria-label="Open menu"
							title="Open menu"
							onClick={() => setClosed(false)}
						>
							<svg
								aria-hidden="true"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					) : (
						<button
							className="w-12 mb-2"
							aria-label="Close menu"
							title="Close menu"
							onClick={() => setClosed(true)}
						>
							<svg
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					)}
				</header>
			</main>

			<div
				className="absolute 
							text-centet 
							w-screen"
			>
				{!isClosed && (
					<div
						aria-hidden={isClosed}
						className="bg-primary_bg_color 
									text-center 
									mt-20 
									absolute 
									w-full"
					>
						<ul className="text-header_color bg-primary_bg_color text-5xl">
							<li className="p-8">
								<Link to="/"> My Browsing Peeps </Link>
							</li>
							<li className="p-8">
								<Link to="/"> My Profile as Senpai </Link>
							</li>
							<li className="p-8">
								<Link to=""> My Profile as Kohai </Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
