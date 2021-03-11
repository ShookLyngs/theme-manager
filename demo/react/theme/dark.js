import { createTheme } from '@lyngs/themer-react';

export default createTheme({
  name: 'dark',
  data: {
    colors: {
      theme: {
        default: '#ffbe26',
        400: 'rgba(255,190,38, .6)',
      },
      positive: {
        default: '#ffffff',
        900: '#ffffff',
        800: '#efefef',
        700: '#c2c2c2',
        500: '#959595',
        200: '#393939',
        100: '#2a2a2a',
      },
    },
  }
});