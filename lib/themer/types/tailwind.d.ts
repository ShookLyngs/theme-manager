import { Themer } from './theme-manager';
import { ThemeDataShape } from './theme';
interface TailwindThemeData {
    [key: string]: {
        [key: string]: string;
    };
}
export declare function createTailwindPreset(Themer: Themer): {
    theme: {
        extend: {
            [x: string]: {
                [key: string]: string;
            };
        };
    };
};
export declare function createTailwindThemeData(shape: ThemeDataShape): TailwindThemeData;
export {};
