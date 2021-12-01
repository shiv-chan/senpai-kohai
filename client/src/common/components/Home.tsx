import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

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
		<div className="bg-primary_bg_color text-primary_title_color">
			<div className="p-10 md:p-20 md:grid md:grid-cols-7 md:grid-row-4 grid justify-items-stretch">
				<h1 className="text-3xl font-black md:text-7xl mt-5 text-center md:text-left col-start-1 col-span-3">
					Senpai Kohai
				</h1>
				<img
					className="md:w-6/6 md:row-span-4 md:col-span-4 mt-5"
					src="./assets/shared_workspace.svg"
					alt="shared_workspace"
				/>
				<p className="mt-5 font-extrabold text-base w-auto md:text-2xl text-center md:text-left col-span-3">
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
			</div>
			<section>
				<div className="text-center p-10 md:p-20">
					<h2 className="text-3xl p-10 md:p-20 font-black md:text-7xl">
						About
					</h2>
					<p className="text-xl md:text-3xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,{' '}
						dolorum! Iste assumenda molestias, rerum provident eos consequatur
						voluptatibus aut repudiandae? Hic repudiandae eos eveniet amet sit
						architecto nostrum vitae ipsam.
					</p>
					<div className="p-10 md:p-20">
						<h2 className="text-3xl font-black text-center md:text-7xl">
							Q&As
						</h2>
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
										consequatur voluptatibus aut repudiandae? Hic repudiandae
										eos eveniet amet sit architecto nostrum vitae ipsam.
									</p>
								</AccordionItemPanel>
							</AccordionItem>
							<AccordionItem className="p-5">
								<AccordionItemHeading>
									<AccordionItemButton>
										Why you need Senpai ?
									</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									<p>
										dolorum! Iste assumenda molestias, rerum provident eos
										consequatur voluptatibus aut repudiandae? Hic repudiandae
										eos eveniet amet sit architecto nostrum vitae ipsam.
										dolorum! Iste assumenda molestias, rerum provident eos
										consequatur voluptatibus aut repudiandae? Hic repudiandae
										eos eveniet amet sit architecto nostrum vitae ipsam.
									</p>
								</AccordionItemPanel>
							</AccordionItem>
							<AccordionItem className="p-5">
								<AccordionItemHeading>
									<AccordionItemButton>How does it work ?</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									<p>
										Exercitation in fugiat est ut ad ea cupidatat ut in
										cupidatat occaecat ut occaecat consequat est minim minim
										esse tempor laborum consequat esse adipisicing eu
										reprehenderit enim.
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
										Exercitation in fugiat est ut ad ea cupidatat ut in
										cupidatat occaecat ut occaecat consequat est minim minim
										esse tempor laborum consequat esse adipisicing eu
										reprehenderit enim. dolorum! Iste assumenda molestias, rerum
										provident eos consequatur voluptatibus aut repudiandae? Hic
										repudiandae eos eveniet amet sit architecto nostrum vitae
										ipsam.
									</p>
								</AccordionItemPanel>
							</AccordionItem>
						</Accordion>
					</div>
					<div className="p-10">
						<h2 className="text-3xl md:text-7xl font-black text-center">
							Contact
						</h2>
						<div className="md:flex md:p-10 md:mt-20 flex-1 justify-items-stretch">
							<img
								className="md:w-2/4 ms:p-20 justify-self-center"
								src="./assets/contact.svg"
								alt="contact"
							/>

							<div className="text-center mt-10 md:mt-15 md:p-10  text-base md:text-5xl justify-self-center">
								<p>
									Please reach at xxxx@xxxx.com <br />
									Thank you!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
