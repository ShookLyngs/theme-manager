import { Themer, ThemerOptions } from '@lyngs/themer';
export declare function useThemer(key: symbol): Themer;
export declare function createThemer(options: ThemerOptions): {
    key: symbol;
    origin: Themer;
    useThemer: () => Themer;
};
