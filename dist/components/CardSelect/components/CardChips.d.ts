import { ReactElement } from 'react';
import { TChipsProps } from '../../Chips/types';
interface TCardChips {
    chips: TChipsProps[];
    disabled?: boolean;
}
export declare const CardChips: (props: TCardChips) => ReactElement;
export {};
