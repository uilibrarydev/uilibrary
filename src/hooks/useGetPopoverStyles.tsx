import { useMemo } from 'react'
import { useGetElemSizes } from './useGetElemSizes'
import { useGetElemPositions } from './useGetElemPositions'
import { useGetTooltipPosition } from './useGetTooltipPosition'

const TOOLTIP_GAP = 8

type TReturn = {
  popoverPosition: TTooltipPosition
  popoverStyles: { top: number; left: number }
}
export const useGetPopoverStyles = ({
  initialPosition,
  elemRef,
  popoverRef
}: {
  initialPosition: TTooltipPosition
  elemRef: HTMLElement | null
  popoverRef: HTMLElement | null
}): TReturn => {
  const { top, left, right } = useGetElemPositions(elemRef)
  const { width, height } = useGetElemSizes(elemRef)
  const { width: popoverWidth, height: popoverHeight } = useGetElemSizes(popoverRef)

  const popoverPosition = useGetTooltipPosition({
    tooltipRef: popoverRef,
    elemRef,
    initialPosition
  })

  const popoverStyles = useMemo(() => {
    const coef = popoverPosition.includes('top') ? -1 : 1

    if (popoverPosition === 'bottom-left') {
      return { top: top + height + TOOLTIP_GAP * coef, left }
    }
    if (popoverPosition === 'bottom-right') {
      return { top: top + height + TOOLTIP_GAP, left: right - popoverWidth - TOOLTIP_GAP }
    }
    if (popoverPosition === 'top-left') {
      console.log('popoverPosition')
      return { top: top + (popoverHeight + TOOLTIP_GAP) * coef, left }
    }
    if (popoverPosition === 'top-right') {
      console.log('popoverPosition')

      return {
        top: top - (popoverHeight + TOOLTIP_GAP),
        left: right - width
      }
    }
    if (popoverPosition === 'middle-right') {
      return { top: top + height / 2 - popoverHeight / 2, left: left + width + TOOLTIP_GAP }
    }
    if (popoverPosition === 'middle-left') {
      return { top: top + height / 2 - popoverHeight / 2, left: left - popoverWidth - TOOLTIP_GAP }
    }

    return { left, top }
  }, [top, left, width, height, popoverPosition, popoverWidth])

  return { popoverStyles, popoverPosition }
}
