import { ReactElement } from 'react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import './styles.scss';
interface TProps extends ReactDatePickerCustomHeaderProps {
    months: TSelectOptions;
    startYear: number;
    endYear: number;
    dataPrefix?: string;
}
export declare const CustomHeader: (props: TProps) => ReactElement;
export {};
