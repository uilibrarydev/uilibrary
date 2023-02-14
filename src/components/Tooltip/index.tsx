import React, { useEffect, useMemo, useState } from 'react'
import { useGetElemPosition, useGetElemSizes } from '../../hooks/useGetElemPosition'

import { TTooltipProps } from './types'
import '../../assets/styles/components/_tooltip.scss'
import Text from '../Text'

const GAP = 20
export const Tooltip = (props: TTooltipProps): JSX.Element | null => {
  const [isHovered, setIsHoverved] = useState(false)
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null)
  const [elemRef, setElemRef] = useState<HTMLSpanElement | null>(null)

  const { size = 'large', text, className = '', position = 'top-left', children } = props

  const { left, top, bottom } = useGetElemPosition(elemRef)
  const { width, height } = useGetElemSizes(tooltipRef)

  const calculatedPosition = useMemo(() => {
    const hasTopSpace = height + GAP < top

    const hasBottomSpace = height + GAP < window.innerHeight - bottom

    const hasLeftSpace = width + GAP < left
    const hasRightSpace = width + GAP < window.innerWidth - left

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
  }, [height, bottom, position])

  const onMouseEnter = () => {
    console.log('mouseenter')

    setIsHoverved(true)
  }
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
          display: 'inline-block',
          margin: 100,
          boxSizing: 'border-box'
        }}
        ref={setElemRef}
      >
        <div
          className={`tooltip tooltip--${size} tooltip--${calculatedPosition} ${className}`}
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
        {children}
      </span>
    </>
  )
}

export default Tooltip
