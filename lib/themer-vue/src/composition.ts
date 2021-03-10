import { ThemeManager, createThemeManager as createThemeManagerOriginal, ThemeManagerOptions } from '@lyngs/themer';
import { App, inject, ref } from 'vue';

const themeManagerKey = 'themeManager';
export function useThemeManager() {
  return inject<ThemeManager>(themeManagerKey);
}

export function createThemeManager(options: ThemeManagerOptions) {
  const manager = createThemeManagerOriginal(options);

  // Convert to observable value
  manager.theme = ref(manager.theme.value);

  return {
    manager,
    install(app: App) {
      app.provide(themeManagerKey, manager);
      app.config.globalProperties.$themeManager = manager;
    }
  };
}