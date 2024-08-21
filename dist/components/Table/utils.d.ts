import { Hooks } from 'react-table';
export declare const CHECKBOX_HEADER_ID = "selection";
export declare const CHECKBOX_DEFAULT_WIDTH = 48;
export declare function setSelectedRows(hooks: Hooks, withSelect: boolean): void;
export declare function calcColumnWidth(percent: number, tableWidth: number): number;
