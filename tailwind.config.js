/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura'],
        spartan: ['League Spartan'],
        trendSans: ['Trend Sans', 'sans-serif'],
        alleron: ['Alleron', 'sans-serif'],
        glacial: ['Glacial Indifference', 'sans-serif'],
        horizon: ['Horizon', 'sans-serif'],
        screens: {
          'custom': '930px', // Custom breakpoint at 930px
        },
      },
    },
  },
  plugins: [],
});
