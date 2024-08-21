/// <reference types="react" />
import { TMenuItem } from '../../Menu/types';
type TProps = {
    selectActions: TMenuItem[];
    innerLabel?: string;
};
export declare const Actions: (props: TProps) => JSX.Element | null;
export {};
