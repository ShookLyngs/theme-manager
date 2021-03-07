import { ThemeManager, createThemeManager as createThemeManagerOriginal, ThemeManagerOptions } from '../../themer/src/theme-manager';
import { App, inject, ref } from 'vue';

const themeManagerKey = 'themeManager';
export function useThemeManager() {
  return inject<ThemeManager>(themeManagerKey);
}

export function createThemeManager(options: ThemeManagerOptions) {
  const manager = createThemeManagerOriginal(options);

  // Convert to observable
  manager.theme = ref(manager.theme.value);

  // Wrap `setTheme()`, prevent loss of pointer
  const setTheme = manager.setTheme;
  manager.setTheme = theme => setTheme.call(manager, theme);

  return {
    manager,
    install(app: App) {
      app.provide(themeManagerKey, manager);
      app.config.globalProperties.$themeManager = manager;
    }
  };
}