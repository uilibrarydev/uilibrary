import { ReactNode } from 'react';
import { ISVGIconProps } from '../SVGIcons/types';
export type TChipsColors = 'primary' | 'disabled' | 'brand' | 'danger' | 'warning' | 'success' | 'information' | 'discovery';
export interface TChipsProps extends IFormCompProps {
    text?: string | ReactNode;
    leftIconProps?: ISVGIconProps;
    color?: TChipsColors;
    type?: 'filled' | 'accent' | 'outlined';
    size?: 'large' | 'medium' | 'small';
    className?: string;
    disabled?: boolean;
    withAction?: boolean;
    onClick?: (e: TClickEventType) => void;
    dataId?: string;
    id?: string | number;
}
export declare enum ChipCustomType {
    filled = "filled",
    inverse = "inverse"
}
