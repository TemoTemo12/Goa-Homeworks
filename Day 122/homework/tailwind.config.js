// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path covers all your files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // For beautiful form components
  ],
};
