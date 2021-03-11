import {
  ThemeManager, ThemeManagerOptions,
  createThemeManager as createThemeManagerOriginal,
} from '@lyngs/themer';

import { useState } from 'react';
import { cloneDeep } from 'lodash';

interface ThemeManagerStore {
  options: ThemeManagerOptions;
  origin: ThemeManager;
  instance?: ThemeManager;
}

const store = new Map<symbol, ThemeManagerStore>();

function createThemeMangerStore(options: ThemeManagerOptions) {
  const key = Symbol();

  store.set(key, {
    options,
    origin: createThemeManagerOriginal(options)
  });

  return key;
}

export function useThemeManager(key: symbol): ThemeManager {
  const item = store.get(key);
  if (!item) throw new Error(`ThemeManager instance not exist`);

  const manager = 'instance' in item ? <ThemeManager>item.instance : item.origin;
  const [ state, setState ] = useState(cloneDeep(manager.theme));

  manager.theme = state;
  manager.themeValueUpdater = (theme) => setState(cloneDeep(theme));

  item.instance = manager;
  return manager;
}

export function createThemeManager(options: ThemeManagerOptions) {
  const key = createThemeMangerStore(options);

  return {
    key,
    useThemeManager: () => useThemeManager(key),
  };
}