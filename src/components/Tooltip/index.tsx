import React, { useEffect, useState } from 'react'

import { useGetTooltipPosition } from '../../hooks/useGetTooltipPosition'
import Text from '../Text'

import { TTooltipProps } from './types'
import '../../assets/styles/components/_tooltip.scss'
import classNames from 'classnames'

export const Tooltip = (props: TTooltipProps): JSX.Element | null => {
  const [isHovered, setIsHoverved] = useState(false)
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null)
  const [elemRef, setElemRef] = useState<HTMLSpanElement | null>(null)

  const {
    size = 'large',
    text,
    className = '',
    position = 'bottom-center',
    dataId = '',
    children
  } = props
  const tooltipPosition = useGetTooltipPosition({ tooltipRef, elemRef, initialPosition: position })

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
        data-id={dataId}
        style={{
          position: 'relative',
          display: 'inline-block'
        }}
        ref={setElemRef}
      >
        {isHovered && (
          <div
            data-id={dataId}
            className={classNames(
              `tooltip tooltip--${size} tooltip--${tooltipPosition}`,
              className
            )}
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
      </span>
    </>
  )
}

export default Tooltip
