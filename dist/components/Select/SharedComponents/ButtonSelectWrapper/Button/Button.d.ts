import { LegacyRef, ReactElement } from 'react';
type TProps = {
    buttonText: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    disabled?: boolean;
    dataId?: string;
    onClick: () => void;
    refHandler?: LegacyRef<HTMLButtonElement> | undefined;
    selectedItemsLabels: string;
    isOpen?: boolean;
    type?: 'primary' | 'secondary' | 'tertiary';
};
export declare const Button: (props: TProps) => ReactElement;
export {};
