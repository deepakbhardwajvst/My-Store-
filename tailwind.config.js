const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '778px',
      'lg' : '1024px',
      'xl' : '1280px',
      'mob' : {'max':'640px'}
      
    },
    
    extend: {
      fontFamily: {
        'inter': ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
});