import React, { useEffect, useState } from 'react'

import { useGetTooltipStyles } from '../../hooks/useGetTooltipStyles'
import Text from '../Text'

import { TTooltipProps } from './types'
import '../../assets/styles/components/_tooltip.scss'
import classNames from 'classnames'

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
    id,
    elemRef
  } = props

  const [parent, setElement] = useState<HTMLElement | null>(elemRef || null)

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id.toString())
      setElement(element)
    }
  }, [id])

  const onMouseEnter = () => setIsHoverved(true)
  const onMouseLeave = () => setIsHoverved(false)

  const { tooltipStyles, tooltipPosition } = useGetTooltipStyles({
    elemRef: parent,
    tooltipRef,
    initialPosition: position
  })

  console.log('tooltipPosition', tooltipPosition)

  useEffect(() => {
    if (parent) {
      parent.addEventListener('mouseenter', onMouseEnter, false)
      parent.addEventListener('mouseleave', onMouseLeave, false)
    }
  }, [parent])

  return (
    <>
      {isHovered && (
        <div
          style={tooltipStyles}
          data-id={dataId}
          className={classNames(`tooltip tooltip--${size} tooltip--${tooltipPosition}`, className)}
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
