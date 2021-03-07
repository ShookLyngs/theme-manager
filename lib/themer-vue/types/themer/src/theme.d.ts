export interface Theme {
    value: ThemeModule;
}
export interface ThemeModule {
    name: string;
    data: ThemeData;
}
export interface ThemeData {
    [key: string]: ThemeInnerData;
}
export interface ThemeInnerData {
    [key: string]: string | ThemeInnerData;
}
export declare type ThemeWrapper = (() => ThemeModule) | ThemeModule;
export interface ThemeDataShape {
    [key: string]: string[];
}
export declare function createTheme(module: ThemeWrapper): Theme;
export declare function createUsefulThemeVariables(theme: Theme): {
    [x: string]: string | ThemeInnerData;
};
export declare function getThemeDataShape(themes: Theme[]): ThemeDataShape;
