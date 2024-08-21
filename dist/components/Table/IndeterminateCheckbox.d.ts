import React from 'react';
type IndeterminateCheckboxProps = {
    indeterminate: boolean;
    checked: boolean;
    onChange: (e: {
        target: {
            checked: boolean;
        };
    }) => void;
};
export declare const IndeterminateCheckbox: React.ForwardRefExoticComponent<IndeterminateCheckboxProps & React.RefAttributes<HTMLInputElement>>;
export {};
