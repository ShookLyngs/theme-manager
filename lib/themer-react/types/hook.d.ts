import { ThemeManager, ThemeManagerOptions } from '@lyngs/themer';
export declare function useThemeManager(key: symbol): ThemeManager;
export declare function createThemeManager(options: ThemeManagerOptions): {
    key: symbol;
    useThemeManager: () => ThemeManager;
};
