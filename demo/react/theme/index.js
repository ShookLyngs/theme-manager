import { createThemeManager } from '@lyngs/themer-react';

import light from './light';
import dark from './dark';

export const {
  useThemeManager
} = createThemeManager([
  light,
  dark,
]);