import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';
import Footer from './Footer';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Home = () => {
	// test, added style here just to see the classes work
	return (
		<>
			<div className="bg-primary_bg_color text-primary_title_color font-sans overflow-x-hidden">
				<section className="p-10 md:p-20 md:grid md:grid-cols-7 md:grid-row-4 grid justify-items-stretch">
					<h1 className="text-3xl font-bold md:text-7xl mt-5 text-center md:text-left col-start-1 col-span-3">
						Senpai Kohai
					</h1>
					<img
						className="md:w-6/6 md:row-span-4 md:col-span-4 mt-5"
						src="./assets/shared_workspace.svg"
						alt="shared_workspace"
					/>
					<p className="mt-5 font-bold text-base w-auto md:text-2xl text-center md:text-left col-span-3">
						Find your guide, Support youngs
					</p>
					<p className="underline cursor-pointer mt-5 w-auto text-sm md:text-lg text-center md:text-left flex col-span-3 justify-self-center md:justify-self-start">
						<FaQuestionCircle />
						&nbsp; What are Senpai and Kohai?
					</p>
					<div
						className="cursor-pointer 
								mt-5 
								border-2 
								py-2
								md:py-1.5
								w-28
								h-10 
								text-primary_bg_color 
								bg-primary_title_color 
								rounded-full 
								font-black 
								hover:bg-secondary_bg_color 
								text-center
								text-sm
								md:text-base
								col-end-2
								justify-self-center
								md:justify-self-start
								"
					>
						<Link to="/signup">Join Now</Link>
					</div>
				</section>
				<section className="p-10 md:p-20 relative">
					<h2 className="text-2xl md:text-5xl text-center font-bold mb-10 md:mb-20">
						About
					</h2>
					<div className="text-md md:text-2xl max-w-screen-lg mx-auto relative z-10">
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
				</section>
				<section className="p-10 md:p-20">
					<h2 className="text-2xl font-bold text-center md:text-5xl">Q&As</h2>
					<Accordion className="p-10 text-sm md:text-2xl w-auto">
						<AccordionItem className="p-5">
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
						<AccordionItem className="p-5">
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
						<AccordionItem className="p-5">
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
						<AccordionItem className="p-5">
							<AccordionItemHeading>
								<AccordionItemButton>
									What you can do for Kohais ?
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
							<p className="mb-2">
								Please reach at{' '}
								<address className="font-bold">
									info.senpai.kohai@gmail.com
								</address>
							</p>
							<p>Thank you!</p>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default Home;
