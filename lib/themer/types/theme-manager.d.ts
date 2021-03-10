import { Theme } from './theme';
export interface ThemeManager extends ThemeManagerData {
    themeValueUpdater?: (theme: Theme) => void;
    setTheme: (theme: string | Theme) => boolean;
}
export interface ThemeManagerData extends ThemeManagerObjectOptions {
    theme: Theme;
    themeValueUpdater?: (theme: Theme) => void;
    setTheme?: (theme: string | Theme) => boolean;
}
export interface ThemeManagerObjectOptions {
    element?: HTMLElement;
    themes: Theme[];
}
export declare type ThemeManagerOptions = ThemeManagerObjectOptions | Theme[];
export declare function createThemeManager(options: ThemeManagerOptions): ThemeManager;
export declare function createDefaultElement(): HTMLElement | undefined;
export declare function setTheme(managerData: ThemeManagerData, theme: string | Theme): boolean;
