import { createTheme } from './generate';
import {
  isObject, defaultElement,
  setDocumentVariables, createVariables, createFlatVarMap,
} from './util';

export class Theme {
  constructor(theme) {
    const instance = theme instanceof Function ? theme() : theme;

    // Check for necessary properties existence
    [ 'name', 'data' ].forEach(propertyName => {
      if (!instance?.[propertyName]) {
        throw new Error(`Missing Theme property: ${propertyName}`);
      }
    });

    this.value = instance;
  }
}

export class ThemeManager {
  constructor(options) {
    this.element = defaultElement();
    this.themes  = [];

    if (isObject(options)) {
      const { element, themes } = options;

      if (element) this.element = element;
      if (Array.isArray(themes)) this.themes = themes.filter(
        theme => theme instanceof Theme
      );
    }
    else if (Array.isArray(options)) {
      this.themes = [].concat(options);
    }
    else {
      throw new Error(`Param 'options' must be Object or Array`);
    }

    if (this.themes.length) {
      this.theme = this.themes[0];
      if (this.element) {
        this.setTheme(this.themes[0]);
      }
    }
  }

  setTheme(theme) {
    if (typeof theme === 'string') {
      theme = this.themes.find(row => row.value.name === theme);
    }
    if (!theme instanceof Theme) {
      theme = createTheme(theme);
    }

    const variables = createVariables(theme);
    setDocumentVariables(this.element, variables);

    if (this.theme) {
      this.theme.value = theme.value;
    } else {
      this.theme = theme;
    }
  }

  getThemeDataKeys() {
    return this.themes.reduce((collection, theme) => {
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
}