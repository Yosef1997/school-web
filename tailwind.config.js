/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        jumbotron1: "url('/jumbotron1.webp')",
        jumbotron2: "url('/jumbotron2.webp')",
      },
    },
    colors: {
      white: '#FFFFFF',
      primary: '#0193DC',
      secondary: '#0C101A',
      tertiary: '#3A4E50',
      navbar: '#101524',
      'dark-grey': '#919FAE',
      'light-grey': '#DFDFDF',
    },
  },
  plugins: [],
}
