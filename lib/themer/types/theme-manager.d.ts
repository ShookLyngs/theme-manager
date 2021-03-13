import { Theme } from './theme';
export interface Themer extends ThemerData {
    themeValueUpdater?: (theme: Theme) => void;
    setTheme: (theme: string | Theme) => boolean;
}
export interface ThemerData extends ThemerObjectOptions {
    theme: Theme;
    themeValueUpdater?: (theme: Theme) => void;
    setTheme?: (theme: string | Theme) => boolean;
}
export interface ThemerObjectOptions {
    element?: HTMLElement;
    themes: Theme[];
}
export declare type ThemerOptions = ThemerObjectOptions | Theme[];
export declare function createThemer(options: ThemerOptions): Themer;
export declare function createDefaultElement(): HTMLElement | undefined;
export declare function setTheme(managerData: ThemerData, theme: string | Theme): boolean;
