/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '414px',
        '2xl': '1366px',
        '3xl': '1440px',
        '4xl': '1536px',
        '5xl': '1920px'
      },
      backgroundImage: {},
      fontSize: {},
      colors: {
        primary: '#E4801D',
        secondary: '#8DB230',
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          primary: '#8D8D8D',
          dark: '#393E46',
          light: '#C2C2C2'
        },
        orange: {
          primary: '#E4801D',
          dark: '',
          light: ''
        },
        red: {
          primary: '',
          dark: '',
          light: ''
        },
        green: {
          primary: '',
          dark: '',
          light: ''
        },
        blue: {
          primary: '',
          dark: '',
          light: ''
        },
        purple: {
          primary: '',
          dark: '',
          light: ''
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {}
    }
  },
  plugins: []
}
