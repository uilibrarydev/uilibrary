import React, { useEffect, useMemo, useState } from 'react'
import { useGetElemPosition, useGetElemSizes } from '../../hooks/useGetElemPosition'

import { TTooltipProps } from './types'
import '../../assets/styles/components/_tooltip.scss'
import Text from '../Text'

const GAP = 20
const ARROW_DISTANCE = 20

export const Tooltip = (props: TTooltipProps): JSX.Element | null => {
  const [isHovered, setIsHoverved] = useState(false)
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null)
  const [elemRef, setElemRef] = useState<HTMLSpanElement | null>(null)

  const { size = 'large', text, className = '', position = 'bottom-center', children } = props

  const { left, top, bottom } = useGetElemPosition(elemRef)
  const { width: tooltipWidth, height: tooltipHeight } = useGetElemSizes(tooltipRef)
  const { width: itemWidth } = useGetElemSizes(elemRef)

  // this is calculations for tooltip top/left/bottom/right positions
  const calculatedPosition = useMemo(() => {
    const hasTopSpace = tooltipHeight + GAP < top

    const hasBottomSpace = tooltipHeight + GAP < window.innerHeight - bottom

    const hasLeftSpace = tooltipWidth + GAP < left
    const hasRightSpace = tooltipWidth + GAP < window.innerWidth - left

    if (!hasTopSpace && position.includes('top')) {
      return position.replace('top', 'bottom')
    }
    if (!hasBottomSpace && position.includes('bottom')) {
      return position.replace('bottom', 'top')
    }
    if (!hasLeftSpace && position.includes('left')) {
      return position.replace('left', 'right')
    }
    if (!hasRightSpace && position.includes('right')) {
      return position.replace('right', 'left')
    }

    return position
  }, [tooltipHeight, tooltipWidth, bottom, position])

  // this is calculations for triangle position
  const finalPosition = useMemo(() => {
    const hasLeftSpace = tooltipWidth < left + ARROW_DISTANCE + GAP
    const hasRightSpace = tooltipWidth + GAP < window.innerWidth - left

    // in case of middle position we don't need to change triangle position
    if (calculatedPosition.includes('middle')) {
      return calculatedPosition
    }

    if (calculatedPosition.includes('right') && !hasLeftSpace) {
      return calculatedPosition.replace('right', 'left')
    }
    if (calculatedPosition.includes('left') && !hasRightSpace) {
      return calculatedPosition.replace('left', 'right')
    }

    if (calculatedPosition.includes('center')) {
      if (!hasLeftSpace) {
        return calculatedPosition.replace('center', 'left')
      } else {
        return calculatedPosition.replace('center', 'right')
      }
    }
    return calculatedPosition
  }, [calculatedPosition, tooltipWidth, itemWidth, left])

  const onMouseEnter = () => setIsHoverved(true)

  const onMouseLeave = () => setIsHoverved(false)

  useEffect(() => {
    if (elemRef) {
      elemRef.addEventListener('mouseenter', onMouseEnter, false)
      elemRef.addEventListener('mouseleave', onMouseLeave, false)
    }
  }, [elemRef])

  return (
    <>
      <span
        style={{
          position: 'relative',
          display: 'inline-block'
        }}
        ref={setElemRef}
      >
        {isHovered && (
          <div
            className={`tooltip tooltip--${size} tooltip--${finalPosition} ${className}`}
            ref={setTooltipRef}
          >
            <Text
              className="tooltip__inner"
              type="primary"
              weight="regular"
              lineHeight="small"
              size={`${size == 'small' ? 'xsmall' : 'small'}`}
            >
              {text}
            </Text>
          </div>
        )}
        {children}
      </span>
    </>
  )
}

export default Tooltip
