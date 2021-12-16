module.exports = {
  mode: 'jit',
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
        favorite_color: '#d64161',
        warning_color: '#d64161',
      },
      spacing: {
        // height from the main content to the bottom of Header
        // for now 3rem but we can change it anytime
        mobileHeaderHeight: '3.5rem',
        laptopHeaderHeight: '4rem',
        paddingAroundtheContent: '2.5rem',
        // px... padding x
        laptopPxAroundtheContent: '4rem',
        mobilePxAroundtheContent: '2rem',
      },
      screens: {
        //min-width
        mobile_s: '320px',
        mobile_m: '375px',
        mobile_l: '425px',
        tablet_s: '640px',
        // max-width
        mobile_s_max: { max: '319px' },
        mobile_m_max: { max: '374px' },
        mobile_l_max: { max: '424px' },
        mobile_xl_max: { max: '639px' },
        tablet_md_max: { max: '767px' },
        tablet_l_max: { max: '1023px' },
        laptop_sm_max: { max: '1279px' },
      },
      minHeight: {
        6: '6rem',
        12: '12rem',
      },
      gridTemplateColumns: {
        'auto-fit-minmax-350': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
