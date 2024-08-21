import { ReactElement } from 'react';
import { TButtonPropTypes } from '../../Button/types';
import { TCheckboxInfo } from '../types';
type TProps = {
    isLoading?: boolean;
    footerButtons?: {
        cancel: TButtonPropTypes;
        confirm: TButtonPropTypes;
        extraButton?: TButtonPropTypes;
    };
    onClose: () => void;
    onSubmit?: (isSelected: boolean) => void;
    checkboxInfo?: TCheckboxInfo;
};
export declare const Footer: ({ isLoading, footerButtons, onClose, onSubmit, checkboxInfo }: TProps) => ReactElement | null;
export {};
