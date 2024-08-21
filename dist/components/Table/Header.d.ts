import { ReactElement } from 'react';
import { HeaderGroup } from 'react-table';
type Props = {
    fixedHeader?: boolean;
    withSelect: boolean;
    tableWidth: number;
    headerGroup: HeaderGroup;
};
export declare function Header({ headerGroup, tableWidth, withSelect, fixedHeader }: Props): ReactElement;
export {};
