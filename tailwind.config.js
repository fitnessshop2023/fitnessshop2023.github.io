/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#4c7a53',
      error: '#ff3b30',
      black: '#242424',
      discount: '#FF2F24',
      extraDarkGray: '#505050',
      darkGray: '#7c7c7c',
      lightGray: '#d3d3d3',
      extraLightGray: '#f3f2f8',
      lightGreen: '#34c759',
      yellow: '#ffcc00',
      white: '#ffffff',
      hoverPrimary: '#3f6645',
    },
    extend: {
      spacing: {
        16: '16px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
      },
    },
    corePlugins: {
      textOpacity: false,
    },
  },
  plugins: [],
};
