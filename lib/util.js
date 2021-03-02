import { Theme } from './classes';

export function isObject(target) {
  return Object.prototype.toString.apply(target) === '[object Object]';
}

export function defaultElement() {
  try {
    return document.querySelector(':root');
  } catch {
    return void 0;
  }
}

export function createVariables(theme) {
  if (!theme instanceof Theme) {
    throw new Error(`Param 'theme' must be a Theme`);
  }

  const { colors } = theme.value.data;

  return {
    ...colors,
  };
}

export function setDocumentVariables(element, object) {
  if (!element) return;

  const map = createFlatMap(object);
  Object.keys(map).forEach(key => element.style.setProperty(
    createVarName(key),
    map[key]
  ));
}

export function createVarName(name) {
  return name.startsWith('--') ? name : `--${name}`;
}

export function createVarContent(name) {
  return `var(${createVarName(name)})`;
}

export function createFlatMap(object, inherit = [], reduce = {}) {
  return Object.keys(object).reduce((collection, key) => {
    const value = object[key];
    const names = [].concat(inherit, [ key ]);

    if (Object.prototype.toString.call(value) === '[object Object]') {
      collection = createFlatMap(value, names, reduce);
    } else {
      collection[names.join('-')] = value;
    }

    return collection;
  }, reduce);
}

export function createFlatVarMap(object) {
  const flatMap = createFlatMap(object);
  return Object.keys(flatMap).reduce((collection, key) => {
    collection[key] = `var(${createVarName(key)})`;
    return collection;
  }, {});
}

export function createTailwindThemeData(shape) {
  return Object.keys(shape).reduce((collection, key) => {
    if (!collection[key]) collection[key] = {};
    shape[key].forEach(shapeKey => {
      collection[key][shapeKey] = createVarContent(shapeKey);
    });

    return collection;
  }, {});
}





