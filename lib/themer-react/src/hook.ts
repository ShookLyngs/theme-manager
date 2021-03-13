import {
  Themer, ThemerOptions,
  createThemer as createThemerOriginal,
} from '@lyngs/themer';

import { useState } from 'react';
import { cloneDeep } from 'lodash';

interface ThemerStore {
  options: ThemerOptions;
  origin: Themer;
  instance?: Themer;
}

const store = new Map<symbol, ThemerStore>();

function createThemeMangerStore(options: ThemerOptions) {
  const key = Symbol();
  const storeItem = {
    options,
    origin: createThemerOriginal(options)
  };

  store.set(key, storeItem);

  return {
    key,
    storeItem,
  };
}

export function useThemer(key: symbol): Themer {
  const item = store.get(key);
  if (!item) throw new Error(`Themer instance not exist`);

  const manager = 'instance' in item ? <Themer>item.instance : item.origin;
  const [ state, setState ] = useState(cloneDeep(manager.theme));

  manager.theme = state;
  manager.themeValueUpdater = (theme) => setState(cloneDeep(theme));

  item.instance = manager;
  return manager;
}

export function createThemer(options: ThemerOptions) {
  const { key, storeItem } = createThemeMangerStore(options);

  return {
    key,
    origin: storeItem.origin,
    useThemer: () => useThemer(key),
  };
}