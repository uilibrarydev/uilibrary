type TReturn = {
    tooltipPosition: TTooltipPosition;
    tooltipStyles: {
        top: number;
        left: number;
    };
};
export declare const useGetTooltipStyles: ({ initialPosition, elemRef, tooltipRef, toolTipCurrentWidth }: {
    initialPosition: TTooltipPosition;
    elemRef: HTMLElement | null;
    tooltipRef: HTMLElement | null;
    toolTipCurrentWidth?: number | undefined;
}) => TReturn;
export {};
