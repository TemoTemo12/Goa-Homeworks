module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        secondary: "#4E9AF1", // Neon Blue
        accent: "#F87D6D", // Neon Pink/Red
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(to right, #4E9AF1, #F87D6D)",
      },
    },
  },
  plugins: [],
};
