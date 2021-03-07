import { ThemeInnerData } from './theme';
interface ThemeFlatData {
    [key: string]: string;
}
export declare function setDocumentVariables(element: HTMLElement, object: ThemeInnerData): void;
export declare function createVarName(target: string | number): string;
export declare function createVarContent(name: string): string;
export declare function createFlatMap(object: ThemeInnerData, inheritNames?: string[], reduce?: ThemeFlatData): ThemeFlatData;
export declare function createFlatVarMap(object: ThemeInnerData): ThemeFlatData;
export {};
