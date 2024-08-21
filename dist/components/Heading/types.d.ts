import { ElementType, ReactNode } from 'react';
export interface HeadingPropTypes {
    children?: ReactNode;
    type?: ElementType;
    size?: 'xsmall' | 'small' | 'standard' | 'medium' | 'large' | 'xlarge';
    weight?: 'regular' | 'semibold' | 'bold';
    lineHeight?: 'xsmall' | 'small' | 'medium' | 'large';
    className?: string;
    onClick?: (event: TClickEventType) => void;
    dataId?: string;
}
