import { ReactNode } from 'react';
export interface TSideNavigationPropTypes {
    actionElm: JSX.Element;
    showAction: boolean;
    children: ReactNode;
    showToggleIcon?: boolean;
    open: boolean;
    setOpen: (arg: boolean) => void;
}
export interface TBlock {
    children: ReactNode;
    label?: string;
    open?: boolean;
}
