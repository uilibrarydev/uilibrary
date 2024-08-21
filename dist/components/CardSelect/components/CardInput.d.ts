import { ReactElement } from 'react';
import { InputCustomProps } from '../../Input/types';
interface TCardInput {
    inputProps?: InputCustomProps;
    disabled?: boolean;
}
export declare const CardInput: (props: TCardInput) => ReactElement | null;
export {};
