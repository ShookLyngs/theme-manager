import { createFlatVarMap } from "./variable";

export interface Theme {
  value: ThemeModule;
}
export interface ThemeModule {
  name: string;
  data: ThemeData;
}
export interface ThemeData {
  [key: string]: ThemeInnerData;
}
export interface ThemeInnerData {
  [key: string]: string | ThemeInnerData;
}

export type ThemeWrapper = (() => ThemeModule) | ThemeModule;

export interface ThemeDataShape {
  [key: string]: string[];
}

export function createTheme(module: ThemeWrapper): Theme {
  const instance = module instanceof Function ? module() : module;
  return {
    value: instance
  };
}

export function createUsefulThemeVariables(theme: Theme) {
  const { colors } = theme.value.data;
  return {
    ...colors,
  };
}

export function getThemeDataShape(themes: Theme[]): ThemeDataShape {
  return themes.reduce((collection: ThemeDataShape, theme) => {
    const data = theme.value.data;

    Object.keys(data).forEach(key => {
      const flatMap = createFlatVarMap(data[key]);

      Object.keys(flatMap).forEach(flatMapKey => {
        if (!collection[key]) collection[key] = [];

        if (!collection[key].includes(flatMapKey)) {
          collection[key].push(flatMapKey);
        }
      });
    });

    return collection;
  }, {});
}