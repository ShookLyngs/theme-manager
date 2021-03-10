import {
  createThemeManager,
  useThemeManager as useThemeManagerOriginal,
} from '@lyngs/themer-react';

import light from './light';
import dark from './dark';
const key = createThemeManager([ light, dark ]);

export function useThemeManager() {
  return useThemeManagerOriginal(key);
}