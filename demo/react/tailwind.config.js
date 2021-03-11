import { createTailwindPreset } from '@lyngs/themer-react';
import { origin } from './theme';

export default {
  purge: [
    './**/*.{jsx,js,css}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: [ 'active' ],
      backgroundColor: [ 'active' ],
    },
  },
  plugins: [],
  presets: [
    createTailwindPreset(origin),
  ],
};