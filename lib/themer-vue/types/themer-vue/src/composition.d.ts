import { ThemeManager, ThemeManagerOptions } from '../../themer/src/theme-manager';
import { App } from 'vue';
export declare function useThemeManager(): ThemeManager | undefined;
export declare function createThemeManager(options: ThemeManagerOptions): {
    manager: ThemeManager;
    install(app: App): void;
};
