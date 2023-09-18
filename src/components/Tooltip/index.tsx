import React, { useEffect, useRef, useState } from 'react'

import { useGetTooltipStyles } from '../../hooks/useGetTooltipStyles'
import Text from '../Text'

import { TTooltipProps } from './types'
import '../../assets/styles/components/_tooltip.scss'
import classNames from 'classnames'

export const Tooltip = (props: TTooltipProps): JSX.Element | null => {
  const [isHovered, setIsHoverved] = useState(false)
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const {
    size = 'large',
    text,
    className = '',
    position = 'bottom-left',
    dataId = '',
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
    tooltipRef: tooltipRef.current,
    initialPosition: position
  })
  useEffect(() => {
    document.addEventListener('scroll', onMouseLeave, false)
    return () => {
      document.removeEventListener('scroll', onMouseLeave)
    }
  }, [])

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
          ref={tooltipRef}
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
    </>
  )
}

export default Tooltip
