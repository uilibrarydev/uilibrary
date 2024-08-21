import React from 'react';
import { TMenuItem } from '../../Menu/types';
import { TSelectTranslations } from '../types';
type TProps = {
    searchValue?: string;
    helperText?: string;
    selectAll?: TCallBackFn;
    setSearchValue?: (value: string) => void;
    clearAll?: TCallBackFn;
    isSelectAllDisabled?: boolean;
    isAnySelected?: boolean;
    translations?: TSelectTranslations;
    isSearchAvailable?: boolean;
    hasLimitation?: boolean;
    menuOptions?: TMenuItem[];
    dataIdPrefix?: string;
};
export declare const ContentTop: React.NamedExoticComponent<TProps>;
export {};
