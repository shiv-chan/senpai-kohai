import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';
import Footer from './Footer';
import Header from './Header';
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { checkValidToken } from '../authorizationSlice';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import './accordion.css';

const Home = () => {
	const dispatch = useAppDispatch();
	const hasValidToken = useAppSelector(
		(state) => state.authorization.hasValidToken
	);

	useEffect(() => {
		if (hasValidToken === undefined) {
			dispatch(checkValidToken());
		}
	}, [dispatch]);

	return (
		<>
			<Header hasValidToken={hasValidToken} />
			<main className="bg-primary_bg_color text-primary_title_color font-sans overflow-x-hidden mt-laptopHeaderHeight tablet_md_max:mt-mobileHeaderHeight py-paddingAroundtheContent ">
				<section className="flex justify-center px-28 tablet_md_max:px-10 mb-20 gap-x-8 tablet_md_max:mt-0 mt-4 xl:mt-8">
					<div className="flex flex-col tablet_md_max:items-center tablet_md_max:w-full xl:gap-y-4">
						<div className="mt-7 font-bold">
							<h1 className="text-center mobile_m_max:text-4xl text-5xl lg:text-7xl whitespace-nowrap md:text-left">
								Senpai Kohai
							</h1>
							<p className="mt-5 text-2xl text-center tablet_l_max:text-xl mobile_l_max:w-48 mx-auto md:text-left md:whitespace-nowrap">
								Find your guide, Support youngs
							</p>
						</div>
						<img
							className="w-full my-8 md:hidden"
							src="./assets/shared_workspace.svg"
							alt="shared_workspace"
						/>
						<div className="flex mt-5 items-center text-lg mobile_m_max:text-sm">
							<FaQuestionCircle />
							<p className="underline cursor-pointer ml-2 whitespace-nowrap">
								What are Senpai and Kohai?
							</p>
						</div>
						<Link
							to="/signup"
							className="tablet_md_max:w-full tablet_md_max:flex tablet_md_max:justify-center"
						>
							<button
								className="cursor-pointer 
								mt-5 
							  inline-block
								py-1
							  px-4
								text-primary_bg_color 
								bg-primary_title_color 
								rounded-full 
								font-black
								hover:bg-secondary_bg_color 
								md:text-lg
							  items-center
                shadow-lg
								"
							>
								Join Now
							</button>
						</Link>
					</div>
					<img
						className="w-7/12 tablet_md_max:hidden"
						src="./assets/shared_workspace.svg"
						alt="shared_workspace"
					/>
				</section>
				<section className="p-10 md:p-20 relative">
					<h2 className="text-2xl md:text-5xl text-center font-bold mb-10 md:mb-20">
						About
					</h2>
					<img
						src="./assets/BlobL.svg"
						alt="blob-l"
						className="absolute w-48 h-48 md:w-72 md:h-72 xl:w-full xl:h-full top-1/3 md:top-1/4 -left-14 xl:-left-1/2"
					/>
					<img
						src="./assets/BlobR.svg"
						alt="blob-r"
						className="absolute w-48 h-48 md:w-72 md:h-72 xl:w-full xl:h-full top-1/4 -right-14 xl:-top-0 xl:-right-1/2"
					/>
					<div className="text-md md:text-2xl max-w-screen-lg mx-auto relative">
						<p className="mb-4">
							Volutpat enim commodo condimentum diam pellentesque egestas.
						</p>
						<p className="mb-4">
							Ut tellus viverra amet, ullamcorper mattis eget proin feugiat.
							Suspendisse diam egestas vulputate tristique amet convallis. Ipsum
							viverra sagittis fusce interdum dis.
						</p>
						<p className="mb-4">Dolor cursus viverra tincidunt sed.</p>
					</div>
				</section>
				<section className="p-10 md:p-20 relative">
					<h2 className="text-2xl md:text-5xl text-center font-bold mb-10 md:mb-20">
						Q&As
					</h2>
					<Accordion
						allowMultipleExpanded
						allowZeroExpanded
						className="text-sm md:text-2xl w-full max-w-4xl grid grid-flow-row auto-rows-auto gap-y-5 m-auto md:gap-y-8"
					>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>
									Who is Senpai for Kohai ?
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									dolorum! Iste assumenda molestias, rerum provident eos
									consequatur voluptatibus aut repudiandae? Hic repudiandae eos
									eveniet amet sit architecto nostrum vitae ipsam.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>Why you need Senpai ?</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									dolorum! Iste assumenda molestias, rerum provident eos
									consequatur voluptatibus aut repudiandae? Hic repudiandae eos
									eveniet amet sit architecto nostrum vitae ipsam. dolorum! Iste
									assumenda molestias, rerum provident eos consequatur
									voluptatibus aut repudiandae? Hic repudiandae eos eveniet amet
									sit architecto nostrum vitae ipsam.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>How does it work ?</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
									occaecat ut occaecat consequat est minim minim esse tempor
									laborum consequat esse adipisicing eu reprehenderit enim.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>
									Why Kohais and Senpai ?
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
									occaecat ut occaecat consequat est minim minim esse tempor
									laborum consequat esse adipisicing eu reprehenderit enim.
									dolorum! Iste assumenda molestias, rerum provident eos
									consequatur voluptatibus aut repudiandae? Hic repudiandae eos
									eveniet amet sit architecto nostrum vitae ipsam.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
					</Accordion>
				</section>
				<section className="p-paddingAroundtheContent mobile_xl_max:mobilePxAroundtheContent md:laptopPxAroundtheContent mb-16">
					<h2 className="text-2xl md:text-5xl font-bold text-center mb-10 md:mb-20">
						Contact
					</h2>
					<div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-16 lg:gap-x-40">
						<img
							className="w-3/4 md:w-3/6 max-w-md"
							src="/assets/contact.svg"
							alt="contact"
						/>
						<div className="md:text-xl lg:text-2xl">
							<p>Please reach at </p>
							<address className="font-bold mb-2">
								info.senpai.kohai@gmail.com
							</address>
							<p>Thank you!</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
