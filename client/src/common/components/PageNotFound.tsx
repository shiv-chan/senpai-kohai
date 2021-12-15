import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className="w-screen h-screen bg-primary_bg_color flex flex-col items-center justify-center text-primary_title_color gap-y-12 mobile_l_max:p-mobilePxAroundtheContent p-paddingAroundtheContent md:p-laptopPxAroundtheContent">
			<div className="text-center">
				<h1 className="text-6xl md:text-8xl md:tracking-widest font-black mb-2">
					404
				</h1>
				<h2 className="text-lg md:text-2xl font-bold">Page Not Found</h2>
			</div>
			<img
				src="/assets/lost.svg"
				alt="lost in space"
				className="w-4/5 max-w-md"
			/>
			<Link to="/" className="underline md:text-xl">
				Come Back Now!
			</Link>
		</div>
	);
};

export default PageNotFound;
