import React, { useEffect, useState } from 'react'

import { useGetTooltipStyles } from '../../hooks/useGetTooltipStyles'
import Text from '../Text'

import { TTooltipProps } from './types'
import '../../assets/styles/components/_tooltip.scss'

export const Tooltip = (props: TTooltipProps): JSX.Element | null => {
  const [isHovered, setIsHoverved] = useState(false)
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null)

  const {
    size = 'large',
    text,
    className = '',
    position = 'bottom-left',
    dataId = '',
    children,
    elemRef
  } = props

  const onMouseEnter = () => setIsHoverved(true)
  const onMouseLeave = () => setIsHoverved(false)

  const { tooltipStyles, tooltipPosition } = useGetTooltipStyles({
    elemRef,
    tooltipRef,
    initialPosition: position
  })

  useEffect(() => {
    if (elemRef) {
      elemRef.addEventListener('mouseenter', onMouseEnter, false)
      elemRef.addEventListener('mouseleave', onMouseLeave, false)
    }
  }, [elemRef])

  return (
    <>
      {isHovered && (
        <div
          style={tooltipStyles}
          data-id={dataId}
          className={`tooltip tooltip--${size} tooltip--${tooltipPosition} ${className}`}
          ref={setTooltipRef}
        >
          <Text
            dataId={`${dataId}-text`}
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
    </>
  )
}

export default Tooltip
