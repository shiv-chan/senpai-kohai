import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

const Home = () => {
	// test, added style here just to see the classes work
	return <div　className="bg-primary_bg_color text-primary_title_color bg-gradient">

		<div className="p-20">
			<div className="float-right w-2/4 ">
				<img src="./assets/shared_workspace.svg" />
			</div>

			<div className="text-7xl font-black mobile_s:text-2xl">
				Senpai Kohai
			</div>
			<div className="mt-5 font-extrabold text-2xl w-auto mobile_s:text-xl">
				Find your guide, Support youngs
			</div>
			<div className="underline cursor-pointer w-auto mt-5 flex mobile_s:text-xl">
			 <FaQuestionCircle/> What are Senpai and Kohai?
			</div>
			<div className="cursor-pointer mt-5 border-2 w-24 text-primary_bg_color bg-primary_title_color rounded-full py-3 font-black hover:bg-secondary_bg_color text-center">
				<Link to="/signup">Join Now</Link>
			</div>
		</div>
		<div className="text-center p-20 bg-BlobL bg-no-repeat">
			<div className="text-7xl p-20 font-black">
				About
			</div>
			<div className="text-3xl">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, </p>
				dolorum! Iste assumenda molestias, 
				rerum provident eos consequatur voluptatibus aut repudiandae? Hic repudiandae eos eveniet amet sit 
				architecto nostrum vitae ipsam.
			</div>
			<br/>
			<br/>
		</div>
		<div className="p-20 bg-BlobR bg-no-repeat bg-right mobile_s: ">
			<div className="text-7xl font-black text-center">
				Q&As
			</div>
			<div className="stpace-y-4 p-20 text-center">
			<div className="inline-block relative w-9/12 flow=root p-3">
				<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
					<option>Who is Senpai Kohai for ?</option>
					<option>Option 2</option>
					<option>Option 3</option>
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
				</div>
			</div>
			<div className="inline-block relative w-9/12 flow=root p-3">
				<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
					<option>Who is Senpai Kohai for ?</option>
					<option>Option 2</option>
					<option>Option 3</option>
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
				</div>
			</div>
			<div className="inline-block relative w-9/12 flow=root p-3">
				<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
					<option>Who is Senpai Kohai for ?</option>
					<option>Option 2</option>
					<option>Option 3</option>
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
				</div>
			</div>
			<div className="inline-block relative w-9/12 flow=root p-3">
				<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
					<option>Who is Senpai Kohai for ?</option>
					<option>Option 2</option>
					<option>Option 3</option>
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
				</div>
			</div>

			</div>
		</div>
		<div className="p-20 ">
			<div className="text-7xl font-black text-center">
				Contact
			</div>
			<div className="flex">
			<div className="w-2/4 p-20">
				<img src="./assets/contact.svg" />
			</div>
			<div className="p-20 mt-40 text-2xl">
				<p>Please reach at xxxx@xxxx.com</p>
				<p>Thank you!</p>
			</div>
		</div>
		</div>
	</div>;
};

export default Home;
