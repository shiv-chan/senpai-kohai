import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaTimes } from 'react-icons/fa';
// import { FaBars } from 'react-icons/fa';

const Header = () => {
	const [isClosed, setClosed] = useState(true);

	useEffect(() => {
		document.addEventListener('mousedown', () => {
			setClosed(true);
		});
	});

	const mymenu = React.useRef() as React.MutableRefObject<HTMLDivElement>;

	return (
		<div
			className="bg-header_color
						text-white flex
						justify-between
						items=center 
						font-black 
						w-screen
						h-14
						md:h-16
						p-4
						mx-auto
						"
		>
			<div
				className="flex-grow 
							text-lg
							w-screen
							md:text-3xl
							"
			>
				<Link to="/">Senpai-Kohai</Link>
			</div>
			{/* {!hasValidToken ? ( */}
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
			{/* ) : ( */}

			<div
				className="text-xs
							box-border 
							border-2 
							md:w-40
							p-0.5
							md:p-0
							w-40
							rounded-full 
							cursor-pointer 
							hover:bg-primary_bg_color 
							mr-10 
							text-center
							md:text-base
							ml-6
							"
			>
				Sign Out
			</div>

			<div className="">
				<header className="bg-header_color h-10 flex items-center justify-center">
					{isClosed ? (
						<button
							className="w-8 mb-4 md:w-12 md:mb-2"
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
							className="w-8 mb-4 md:w-12 md:mb-2"
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
			</div>
			{/* )} */}
			<div
				className="absolute 
							text-centet 
							w-screen
							-ml-4
							"
			>
				{!isClosed && (
					<div
						ref={mymenu}
						aria-hidden={isClosed}
						className="
									bg-primary_bg_color 
									text-center 
									mt-12 
									absolute 
									w-full"
					>
						<ul
							className="text-header_color 
									bg-primary_bg_color 
									text-5x1
									md:text-3xl"
						>
							<li className="p-4 md:p-8">
								<Link to="/"> My Browsing Peeps </Link>
							</li>
							<li className="p-4 md:p-8">
								<Link to="/SenpaiProfile"> My Profile as Senpai </Link>
							</li>
							<li className="p-4 md:p-8">
								<Link to="/kohaiprofile"> My Profile as Kohai </Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
