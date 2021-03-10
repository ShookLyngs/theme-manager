import {
  ThemeManager, ThemeManagerOptions,
  createThemeManager as createThemeManagerOriginal,
} from '@lyngs/themer';

import { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';

interface ThemeManagerStore {
  origin: ThemeManager;
  instance?: ThemeManager;
}

const store = new Map<string, ThemeManagerStore>();

export function useThemeManager(key: string): ThemeManager {
  const item = store.get(key);

  if (!item) {
    throw new Error(`You need to create ThemeManager before calling it.`);
  }

  const manager = Reflect.has(item, 'instance')
    ? <ThemeManager>item.instance
    : item.origin;

  const [ state, setState ] = useState(cloneDeep(manager.theme));

  manager.theme = state;
  manager.themeValueUpdater = (theme) => setState(cloneDeep(theme));

  useEffect(() => {
    console.log('state updated: ', state, manager);
  });

  item.instance = manager;
  return manager;
}

export function createThemeManager(options: ThemeManagerOptions) {
  const key = `${Date.now()}`;

  store.set(key, {
    origin: createThemeManagerOriginal(options),
  });

  console.log('created ThemeManager: ', store.get(key));

  return key;
}