import { ReactElement } from 'react';
import { TSelectTranslations } from '../types';
type TProps = {
    isLoading?: boolean;
    withTabs?: boolean;
    isGrouped?: boolean;
    isOpen: boolean;
    translations: TSelectTranslations;
    containerRef: HTMLDivElement | null;
    setIsOpen: (isOpen: boolean) => void;
    dropdownRef: HTMLDivElement | null;
    options: TSelectOptions;
    selectedValues: TSelectedValue[];
    setSelectedValues: (values: TSelectedValue[]) => void;
};
export declare const OptionsWrapper: (props: TProps) => ReactElement;
export {};
