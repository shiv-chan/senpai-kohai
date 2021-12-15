import React from 'react';

const LoadingScreen: React.FunctionComponent<{ text: string }> = ({ text }) => {
	return (
		<div className="w-full h-full fixed top-0 z-50 flex justify-center items-center bg-primary_title_color bg-opacity-75 backdrop-filter backdrop-blur-sm">
			<div className="flex justify-center items-center">
				<img
					className="w-1/4	h-1/4 md:w-1/3 md:h-1/3"
					src="/assets/loading_spinner.svg"
					alt="spinner"
				/>
				<span className="text-lg md:text-xl font-semibold	text-primary_bg_color">
					{text}...
				</span>
			</div>
		</div>
	);
};

export default LoadingScreen;
