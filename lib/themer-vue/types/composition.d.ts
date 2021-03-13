import { Themer, ThemerOptions } from '@lyngs/themer';
import { App } from 'vue';
export declare function useThemer(): Themer | undefined;
export declare function createThemer(options: ThemerOptions): {
    manager: Themer;
    install(app: App): void;
};
