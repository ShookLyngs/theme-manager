import { ThemeInnerData } from './theme';

interface ThemeFlatData {
  [key: string]: string;
}
interface ThemePossibleFlatData {
  [key: string]: string | ThemeInnerData;
}

export function setDocumentVariables(element: HTMLElement, object: ThemeInnerData) {
  if (!element) return;

  // Convert ThemeInnerData to ThemeFlatData
  // Which mean `map` will only have one layer, no deeper
  const map = createFlatMap(object);

  // Not sure if HTMLElement is the right type
  // But we need `element.style` to make things work
  Object.keys(map).forEach(key => {
    element.style.setProperty(createVarName(key), map[key]);
  });
}

export function createVarName(target: string | number): string {
  const name = String(target);
  return name.startsWith('--') ? name : `--${name}`;
}

export function createVarContent(name: string): string {
  return `var(${createVarName(name)})`;
}

export function createFlatMap(object: ThemeInnerData, inheritNames: string[] = [], reduce: ThemeFlatData = {}): ThemeFlatData {
  return Object.keys(object).reduce((collection: ThemePossibleFlatData, key: string) => {
    const value = object[key];
    const names = [ ...inheritNames, key ];

    if (typeof value === 'string') {
      collection[names.join('-')] = value;
    } else {
      collection = createFlatMap(value, names, reduce);
    }

    return (collection as ThemeFlatData);
  }, reduce);
}

export function createFlatVarMap(object: ThemeInnerData) {
  const flatMap = createFlatMap(object);

  return Object.keys(flatMap).reduce((collection: ThemeFlatData, key: string) => {
    collection[key] = `var(${createVarName(key)})`;
    return collection;
  }, {});
}