import { ReactElement } from 'react';
import { TInfoList } from '../types';
interface TCardAdditionalInfo {
    additionalInfo?: TInfoList;
    disabled?: boolean;
}
export declare const CardAdditionalInfo: (props: TCardAdditionalInfo) => ReactElement | null;
export {};
