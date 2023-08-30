import { useMemo } from 'react'
import { useGetElemSizes } from './useGetElemSizes'
import { useGetElemPositions } from './useGetElemPositions'
import { useGetTooltipPosition } from './useGetTooltipPosition'

const TOOLTIP_GAP = 8

type TReturn = {
  tooltipPosition: TTooltipPosition
  tooltipStyles: { top: number; left: number }
}
export const useGetTooltipStyles = ({
  initialPosition,
  elemRef,
  tooltipRef
}: {
  initialPosition: TTooltipPosition
  elemRef: HTMLElement | null
  tooltipRef: HTMLElement | null
}): TReturn => {
  const { top, left, right } = useGetElemPositions(elemRef)
  const { width, height } = useGetElemSizes(elemRef)
  const { width: tooltipWidth, height: tooltipHeight } = useGetElemSizes(tooltipRef)

  const tooltipPosition = useGetTooltipPosition({ tooltipRef, elemRef, initialPosition })

  const tooltipStyles = useMemo(() => {
    const coef = tooltipPosition.includes('top') ? -1 : 1

    if (tooltipPosition === 'bottom-left' || tooltipPosition === 'top-left') {
      return { top: top + (height + TOOLTIP_GAP) * coef, left }
    }
    if (tooltipPosition === 'bottom-right' || tooltipPosition === 'top-right') {
      return {
        top: top + (height + TOOLTIP_GAP) * coef,
        left: right - tooltipWidth - TOOLTIP_GAP
      }
    }
    if (tooltipPosition === 'bottom-center' || tooltipPosition === 'top-center') {
      return { top: top + (height + TOOLTIP_GAP) * coef, left: left - (tooltipWidth - width) / 2 }
    }
    if (tooltipPosition === 'middle-left') {
      return { top: top + height / 2 - tooltipHeight / 2, left: left - tooltipWidth - TOOLTIP_GAP }
    }
    if (tooltipPosition === 'middle-right') {
      return { top: top + height / 2 - tooltipHeight / 2, left: left + width + TOOLTIP_GAP }
    }
    return { left, top }
  }, [top, left, width, height, tooltipPosition, tooltipWidth, tooltipRef])

  return { tooltipStyles, tooltipPosition }
}
