import React from 'react';
import { Link } from 'react-router-dom';

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
		<div className="bg-primary_bg_color text-primary_title_color font-sans overflow-x-hidden">
			<div className="p-10 md:p-20">
				<div className="md:float-right w:20 md:w-2/4 ">
					<img src="./assets/shared_workspace.svg" />
				</div>

				<div className="text-3xl font-black md:text-7xl mt-5 text-center md:text-justify">
					Senpai Kohai
				</div>
				<div className="mt-5 font-extrabold text-base w-auto md:text-2xl text-center md:text-justify">
					Find your guide, Support youngs
				</div>
				<div className="underline cursor-pointer mt-5 text-sm md:text-xl text-center md:text-justify">
					<span className="">What are Senpai and Kohai?</span>
				</div>
				<div className="flex justify-center items-center md:justify-start">
					<div
						className="cursor-pointer 
								mt-5 
								border-2 
								w-24 
								text-primary_bg_color 
								bg-primary_title_color 
								rounded-full 
								py-3 
								font-black 
								hover:bg-secondary_bg_color 
								text-center
								text-sm
								justify-center
								md:text-base
								"
					>
						<Link to="/signup">Join Now</Link>
					</div>
				</div>
			</div>
			<section className="p-10 md:p-20 relative">
				<h2 className="text-2xl md:text-5xl text-center font-bold mb-6">
					About
				</h2>
				<div className="text-md md:text-xl max-w-screen-lg mx-auto relative z-10">
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
					className="absolute w-48 h-48 top-1/3 -left-14"
				/>
				<img
					src="./assets/BlobR.svg"
					alt="blob-r"
					className="absolute w-48 h-48 top-1/4 -right-14"
				/>
			</section>
			<div className="p-10 md:p-20 bg-BlobR bg-no-repeat bg-right bg-contain ">
				<div className="text-3xl font-black text-center md:text-7xl">Q&As</div>
				<Accordion className="p-10 text-sm md:text-2xl w-auto">
					<AccordionItem className="p-5 bg-red">
						<AccordionItemHeading>
							<AccordionItemButton>
								Who is Senpai for Kohai ?
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel className="bg-primary_bg_color text-primary_title_color">
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
						<AccordionItemPanel className="bg-primary_bg_color text-primary_title_color">
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
						<AccordionItemPanel className="bg-primary_bg_color text-primary_title_color">
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
						<AccordionItemPanel className="bg-primary_bg_color text-primary_title_color">
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
			</div>
			<div className="p-10 md:p-20">
				<div className="text-3xl md:text-7xl font-black text-center">
					Contact
				</div>
				<div className="md:flex p-10 md:p-20 justify-center items-center">
					<div className="md:w-2/4 ms:p-20">
						<img src="./assets/contact.svg" />
					</div>
					<div className="md:p-20 md:mt-40  mt-10 text-xl md:text-2xl text-center md:text-start">
						<p>Please reach at xxxx@xxxx.com</p>
						<p>Thank you!</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
