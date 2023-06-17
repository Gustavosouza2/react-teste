/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'listcolumns': 'repeat(auto-fill, minmax(320px, 1fr))',
       
      },
    
      blur: {
        full: '194px',
      },
      fontFamily: {
        sans: 'Poppins',
      },
      gridColumn: {
        'span-16': '1 / span 3',
      },
      margin: {
        'listBook': '3rem auto 0',
      }
    },
  },
  plugins: [],
}

