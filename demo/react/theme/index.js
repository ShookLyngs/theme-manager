import { createThemer } from '@lyngs/themer-react';
import light from './light';
import dark from './dark';

export const { origin, useThemer } = createThemer([
  light,
  dark,
]);