const { urlObjectKeys } = require('next/dist/shared/lib/utils');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern':
          "url('https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png')",
      },
    },
  },
  plugins: [],
};
