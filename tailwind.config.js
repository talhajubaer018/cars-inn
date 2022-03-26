module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: {
          100: '#eee',
          400: '#999',
          500: '#2a2b30',
          800: '#616161',
          900: '#444649',
        },
        customTeal: {
          700: '#02b7ff',
          800: '#117ea8',
        },
        customNavy: {
          bg: '#0a192f',
          bg2: '#112138',
        },
        customFontColor: {
          light: '#ccd6f6',
          dark: '#8892b0'
        }
      },
      borderWidth: {
        1: '1px'
      },
      fontSize: {
        10: '0.625rem !important',
        11: '0.6875rem !important',
        12: '0.75rem !important',
        14: '0.875rem !important',
        15: '0.9375rem !important',
        16: '1rem !important',
        18: '1.125rem !important',
        20: '1.25rem !important',
        25: '1.5625rem !important',
        30: '1.875rem !important',
        40: '2.5rem !important',
        50: '3.125rem !important',
      },
      gridTemplateColumns: {
        '2/1': '2fr 1fr',
        '1/2': '1fr 2fr',
        '3/2': '3fr 2fr',
      },
      spacing: {
        '10': '10%',
        '15': '15%',
      },
      boxShadow: {
        custom: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
      },
      width: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
      maxWidth: {
        '3/4': '75%',
        '9/10': '90%',
      },
      zIndex: {
        'n1': '-1',
      }
    }
  },
  plugins: [],
}
