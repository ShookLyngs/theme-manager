import { createTheme } from '@lyngs/themer-react';

export default createTheme({
  name: 'light',
  data: {
    colors: {
      theme: {
        default: '#ffbe26',
        400: 'rgba(255,190,38, .6)',
      },
      positive: {
        default: '#2a2a2a',
        900: '#2a2a2a',
        800: '#393939',
        700: '#585858',
        500: '#959595',
        200: '#eeeeee',
        100: '#ffffff',
      },
    },
  }
});