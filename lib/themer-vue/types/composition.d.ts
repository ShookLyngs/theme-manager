import { ThemeManager, ThemeManagerOptions } from '@lyngs/themer';
import { App } from 'vue';
export declare function useThemeManager(): ThemeManager | undefined;
export declare function createThemeManager(options: ThemeManagerOptions): {
    manager: ThemeManager;
    install(app: App): void;
};
