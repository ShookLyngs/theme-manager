import { Themer, createThemer as createThemerOriginal, ThemerOptions } from '@lyngs/themer';
import { App, inject, ref } from 'vue';

const ThemerKey = 'Themer';
export function useThemer() {
  return inject<Themer>(ThemerKey);
}

export function createThemer(options: ThemerOptions) {
  const manager = createThemerOriginal(options);

  // Convert to observable value
  manager.theme = ref(manager.theme.value);

  return {
    manager,
    install(app: App) {
      app.provide(ThemerKey, manager);
      app.config.globalProperties.$Themer = manager;
    }
  };
}