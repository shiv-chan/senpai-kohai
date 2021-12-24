import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import axios from 'axios';

const Header: React.FunctionComponent<{ hasValidToken: boolean | undefined }> =
	React.memo(({ hasValidToken }) => {
		const [isOpen, setOpen] = useState(false);
		const navigate = useNavigate();

		const handleClickLogout = async () => {
			try {
				const res = await axios.get(
					'https://senpai-kohai-backend.herokuapp.com/logout',
					{
						withCredentials: true,
					}
				);
				navigate('/login');
				console.log(res.data.message);
			} catch (err: any) {
				if (err.response) {
					console.error(err.response.data.message);
				} else {
					console.error(err);
				}
			}
		};

		const menuStyle = () => {
			return isOpen
				? { transform: 'translateY(0%)' }
				: { transform: 'translateY(-120%)' };
		};

		const headerItems = () => {
			return hasValidToken ? (
				<div className="flex items-center gap-3">
					<button
						className="border-2 border-solid	border-primary_bg_color rounded-full px-3 text-sm"
						onClick={handleClickLogout}
					>
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
			) : (
				<div className="flex items-center gap-3">
					<Link to="/login">
						<button className="border-2 border-solid	border-primary_bg_color rounded-full px-3 text-sm">
							Log in
						</button>
					</Link>
					<Link to="/signup">
						<button className="font-bold text-header_color border-2 border-solid	border-primary_bg_color bg-primary_bg_color rounded-full px-3 text-sm">
							Sign up
						</button>
					</Link>
				</div>
			);
		};
		return (
			<>
				<header className="bg-header_color w-screen h-mobileHeaderHeight md:h-laptopHeaderHeight fixed top-0 z-30 menu">
					<div className="flex items-center	font-sans text-primary_bg_color h-full mx-4">
						<div className="flex-grow">
							<Link to="/" className="italic font-bold">
								Senpai-Kohai
							</Link>
						</div>
						{headerItems()}
					</div>
				</header>
				<div
					className="w-screen bg-tertiary_bg_color fixed top-mobileHeaderHeight flex justify-center items-center transition duration-500 ease-linear transform menu z-20 h-1/3 md:h-2/5"
					style={menuStyle()}
				>
					<ul className="text-header_color font-sans font-bold flex flex-col gap-y-4 text-xl md:text-2xl md:gap-y-7">
						<Link to="/board" onClick={() => setOpen(false)}>
							<li className="hover:text-white">Find Senpai Kohai</li>
						</Link>
						<Link to="/profile/senpai" onClick={() => setOpen(false)}>
							<li className="hover:text-white">My Profile as Senpai</li>
						</Link>
						<Link to="/profile/kohai" onClick={() => setOpen(false)}>
							<li className="hover:text-white">My Profile as Kohai</li>
						</Link>
					</ul>
				</div>
				<div
					className={[
						'z-10',
						'w-full',
						'h-screen',
						'backdrop-filter',
						'backdrop-blur-sm',
						'fixed',
						isOpen ? null : 'hidden',
					].join(' ')}
					onClick={() => setOpen(false)}
				></div>
			</>
		);
	});

export default Header;
