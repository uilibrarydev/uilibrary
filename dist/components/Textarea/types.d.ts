/// <reference types="react" />
export interface TTextAreaTypeProps extends IFormCompProps {
    className?: string;
    name?: string;
    error?: string;
    cols?: number;
    row?: number;
    label?: string | JSX.Element;
    currentValue?: string;
    placeHolder?: string;
    required?: boolean;
    disabled?: boolean;
    maxCount?: number;
    changeHandler?: (event: TChangeEventType) => void;
    helperText?: string;
    successMessage?: string;
    labelAddons?: JSX.Element;
}
