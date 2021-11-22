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
		<div className="bg-primary_bg_color text-primary_title_color bg-gradient">
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
			<div className="text-center p-10 md:p-20 bg-BlobL bg-no-repeat bg-contain">
				<div className="text-3xl p-10 md:p-20 font-black md:text-7xl">
					About
				</div>
				<div className="text-xl md:text-3xl">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,{' '}
					</p>
					dolorum! Iste assumenda molestias, rerum provident eos consequatur
					voluptatibus aut repudiandae? Hic repudiandae eos eveniet amet sit
					architecto nostrum vitae ipsam.
				</div>
				<br />
				<br />
			</div>
			<div className="p-10 md:p-20 bg-BlobR bg-no-repeat bg-right bg-contain ">
				<div className="text-3xl font-black text-center md:text-7xl">Q&As</div>
				<Accordion className="p-10 text-sm md:text-2xl w-auto">
					<AccordionItem>
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
					<AccordionItem>
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
					<AccordionItem>
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
					<AccordionItem>
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
