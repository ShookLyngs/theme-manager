import { ThemeManager } from './theme-manager';
import { ThemeDataShape, getThemeDataShape } from './theme';
import { createVarContent } from './variable';

interface TailwindThemeData {
  [key: string]: {
    [key: string]: string;
  }
}

export function createTailwindPreset(themeManager: ThemeManager) {
  const shape = getThemeDataShape(themeManager.themes)

  return {
    theme: {
      extend: {
        ...createTailwindThemeData(shape),
      },
    },
  };
}

export function createTailwindThemeData(shape: ThemeDataShape): TailwindThemeData {
  return Object.keys(shape).reduce((collection: TailwindThemeData, key: string) => {
    if (!collection[key]) collection[key] = {};

    shape[key].forEach(shapeKey => {
      collection[key][shapeKey] = createVarContent(shapeKey);
    });

    return collection;
  }, {});
}