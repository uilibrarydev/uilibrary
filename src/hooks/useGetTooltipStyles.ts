import {useMemo} from 'react'
import {useGetElemSizes} from './useGetElemSizes'
import {useGetElemPositions} from './useGetElemPositions'
import {useGetTooltipPosition} from './useGetTooltipPosition'

const TOOLTIP_GAP = 8

enum Positions {
    bottomLeft = 'bottom-left',
    bottomRight = 'bottom-right',
    topLeft = 'top-left',
    topRight = 'top-right',
    middleLeft = 'middle-left',
    middleRight = 'middle-right',
    bottomCenter = 'bottom-center',
    topCenter = 'top-center'
}

type TReturn = {
    tooltipPosition: TTooltipPosition
    tooltipStyles: {
        top: number
        left: number
    }
}
export const useGetTooltipStyles = ({
                                        initialPosition,
                                        elemRef,
                                        tooltipRef,
                                        toolTipCurrentWidth
                                    }: {
    initialPosition: TTooltipPosition
    elemRef: HTMLElement | null
    tooltipRef: HTMLElement | null
    toolTipCurrentWidth?: number
}): TReturn => {
    const {top, left, right} = useGetElemPositions(elemRef)

    const {width, height} = useGetElemSizes(elemRef)
    const {height: tooltipHeight, width: tooltipWitdh} = useGetElemSizes(tooltipRef)

    const TOOLTIP_WIDTH = toolTipCurrentWidth || tooltipWitdh

    const tooltipPosition = useGetTooltipPosition({tooltipRef, elemRef, initialPosition})

    const tooltipStyles = useMemo(() => {
        if (tooltipPosition === Positions.bottomLeft) {
            return {top: top + (height + TOOLTIP_GAP), left}
        }
        if (tooltipPosition === Positions.topLeft) {
            return {top: top - (tooltipHeight + TOOLTIP_GAP), left}
        }
        if (tooltipPosition === Positions.bottomRight) {
            return {
                top: top + (height + TOOLTIP_GAP),
                left: right - TOOLTIP_WIDTH - TOOLTIP_GAP
            }
        }
        if (tooltipPosition === Positions.topRight) {
            return {
                top: top - tooltipHeight - TOOLTIP_GAP,
                left: right - TOOLTIP_WIDTH - TOOLTIP_GAP
            }
        }
        if (tooltipPosition === Positions.bottomCenter) {
            return {top: top + (height + TOOLTIP_GAP), left: left - (TOOLTIP_WIDTH - width) / 2}
        }
        if (tooltipPosition === Positions.topCenter) {
            return {top: top - (tooltipHeight + TOOLTIP_GAP), left: left - (TOOLTIP_WIDTH - width) / 2}
        }
        if (tooltipPosition === Positions.middleLeft) {
            return {top: top + height / 2 - tooltipHeight / 2, left: left - TOOLTIP_WIDTH - TOOLTIP_GAP}
        }
        if (tooltipPosition === Positions.middleRight) {
            return {top: top + height / 2 - tooltipHeight / 2, left: left + width + TOOLTIP_GAP}
        }
        return {left, top}
    }, [top, left, width, height, tooltipPosition, TOOLTIP_WIDTH])

    return {tooltipStyles, tooltipPosition}
}
