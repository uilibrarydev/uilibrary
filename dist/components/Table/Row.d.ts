import { ReactElement } from 'react';
import { Row as RowType } from 'react-table';
type Props = {
    row: RowType;
    handleRowClick?: (row: any) => void;
    withSelect: boolean;
    selectedFlatRows: RowType[];
};
export declare function Row({ row, selectedFlatRows, withSelect, handleRowClick }: Props): ReactElement;
export {};
