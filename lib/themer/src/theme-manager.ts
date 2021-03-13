import { createUsefulThemeVariables, Theme } from './theme';
import { setDocumentVariables } from './variable';
import { isObject } from './util';
import { cloneDeep } from 'lodash';

export interface Themer extends ThemerData {
  themeValueUpdater?: (theme: Theme) => void;
  setTheme: (theme: string | Theme) => boolean;
}
export interface ThemerData extends ThemerObjectOptions {
  theme: Theme;
  themeValueUpdater?: (theme: Theme) => void;
  setTheme?: (theme: string | Theme) => boolean;
}
export interface ThemerObjectOptions {
  element?: HTMLElement;
  themes: Theme[];
}
export type ThemerOptions = ThemerObjectOptions | Theme[];

export function createThemer(options: ThemerOptions): Themer {
  const managerData = createThemerData(options);
  managerData.setTheme = (theme) => setTheme(managerData, theme);

  return <Themer>managerData;
}

function createThemerData(options: ThemerOptions): ThemerData {
  let element = createDefaultElement();
  let themes: Theme[] = [];
  let theme: Theme;

  // Array type `options`, accept Theme[]
  if (Array.isArray(options)) {
    if (!options.length) throw new Error(`'themes' must be filled`);
    themes = [ ...options ];
  }

  // Object type `options`
  else if (isObject(options)) {
    const {
      element: optionElement,
      themes: optionThemes,
    } = options;

    if (element) element = optionElement;
    if (Array.isArray(themes)) themes = optionThemes;
  }

  // `themes` must not be empty
  // There for `theme` will always be initialized
  theme = themes[0];

  // `element` is not promised to have value
  // So only set Theme data to Document when element exists
  const managerData = { element, themes, theme };
  if (element) setTheme(managerData, themes[0]);

  return managerData;
}

export function createDefaultElement(): HTMLElement | undefined {
  try {
    const element = document.querySelector(':root');
    return element ? (element as HTMLElement) : void 0;
  } catch {
    return void 0;
  }
}

export function setTheme(managerData: ThemerData, theme: string | Theme): boolean {
  if (typeof theme === 'string') {
    const target = managerData.themes.find(row => row.value.name === theme);
    if (!target) return false;

    theme = target;
  }

  theme = <Theme>cloneDeep(theme);

  // Filter variables from ThemeData
  // Only part of data in Theme will be write in Document
  const variables = createUsefulThemeVariables(theme);

  // Write variables into Document
  if (!managerData.element) return false;
  setDocumentVariables(managerData.element, variables);

  if (managerData.themeValueUpdater instanceof Function) {
    managerData.themeValueUpdater(theme);
  } else {
    managerData.theme.value = theme.value;
  }

  return true;
}