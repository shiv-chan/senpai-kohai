module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      primaryPink: "#f4eeff", // main bg
      secondaryPurple: "#a6b1e1", // secondary bg
      lightPurple: "#dcd6f7", // dropdown menu, tech stack tags
      darkPurple: "#424874", // headers, top titles etc
      veryDarkPurple: "#2f2e41", // some titles
      pinkishGray: "#d0cde1", // icons
      ourGray: "#c4c4c4", // no img
    }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
