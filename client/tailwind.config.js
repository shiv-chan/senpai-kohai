module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				BlobL: "url('http://localhost:3000/assets/BlobL.svg')",
				BlobR: "url('http://localhost:3000/assets/BlobR.svg')",
				terms: "url('http://localhost:3000/assets/terms.svg')",
				shared_workspace:
					"url('http://localhost:3000/assets/shared_workspace.svg')",
				contact: "url('http://localhost:3000/assets/contact.svg')",
			}),
			colors: {
				primary_bg_color: '#f4eeff', // main bg
				secondary_bg_color: '#a6b1e1', // secondary bg
				tertiary_bg_color: '#dcd6f7', // dropdown menu, tech stack tags
				primary_title_color: '#424874', // titles
				header_color: '#424874', // header
			},
			fontSize: {},
			spacing: {
				// height from the main content to the bottom of Header
				// for now 3rem but we can change it anytime
				mobileHeaderHeight: '3.5rem',
				laptopHeaderHeight: '4rem',
				paddingAroundtheContent: '2.5rem',
			},

			screens: {
				mobile_s: '320px',
				mobile_m: '375px',
				mobile_l: '425px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
