module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary_bg_color: '#f4eeff', // main bg
				secondary_bg_color: '#a6b1e1', // secondary bg
				tertiary_bg_color: '#dcd6f7', // dropdown menu, tech stack tags
				primary_title_color: '#424874', // titles
				header_color: '#424874', // header
			},
			spacing: {
				// height from the main content to the bottom of Header
				// for now 3rem but we can change it anytime
				mobileHeaderHeight: '3.5rem',
				laptopHeaderHeight: '4rem',
				paddingAroundtheContent: '2.5rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
