type TPositionReturnTypes = {
    left: number;
    top: number;
    bottom: number;
    right: number;
    x?: number;
    y?: number;
};
export declare const useGetElemPositions: (elemRef: HTMLElement | null) => TPositionReturnTypes;
export {};
