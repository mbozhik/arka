import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    screens: {
      xl: {max: '1780px'},
      sm: {max: '500px'},
    },
    fontFamily: {
      sans: ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
      serif: ['var(--font-source-serif)', ...defaultTheme.fontFamily.serif],
    },
    colors: {
      black: '#0F0F0F',
      white: {
        DEFAULT: '#ffffff',
        dirty: '#FEFEFE',
      },

      green: '#093C2E',
      gray: {
        DEFAULT: '#939495',
        light: '#C4C6D2',
        dark: '#464646',
      },

      transparent: 'transparent',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
