import { RefObject } from 'react';
type TSizes = {
    width: number;
    height: number;
    scrollHeight: number;
};
interface TRef extends RefObject<HTMLElement> {
    clientWidth: number;
    clientHeight: number;
    scrollHeight: number;
}
export declare const useGetElemSizes: (elemRef: HTMLElement | TRef | null) => TSizes;
export {};
