import { Theme, ThemeManager } from './classes';
import { createTailwindThemeData } from './util';

export function createTheme(module) {
  return new Theme(module?.default ?? module);
}

export function createThemeManager(options) {
  return new ThemeManager(options);
}

export function createTailwindPreset(themeManager) {
  if (!themeManager instanceof ThemeManager) {
    throw new Error(`Param 'themeManager' must be a ThemeManager`);
  }

  const shape = themeManager.getThemeDataKeys();

  return {
    theme: {
      extend: {
        ...createTailwindThemeData(shape),
      },
    },
  };
}