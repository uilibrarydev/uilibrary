import React, { useEffect, useState } from 'react'
import { useGetTooltipPosition } from '../../hooks/useGetTooltipPosition'
import Text from '../Text'

import '../../assets/styles/components/_popover.scss'
import { TPopoverProps } from './types'
import { useOnOutsideClick } from '../../hooks'

export const Popover = (props: TPopoverProps): JSX.Element | null => {
  const [isClicked, setIsClicked] = useState(false)
  const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null)
  const [elemRef, setElemRef] = useState<HTMLSpanElement | null>(null)

  const { text, className = '', position = 'top-left', children } = props

  const tooltipPosition = useGetTooltipPosition({
    tooltipRef: popoverRef,
    elemRef,
    initialPosition: position
  })

  const showMessage = () => {
    setIsClicked(true)
  }
  const hideMessage = () => {
    setIsClicked(false)
  }

  useOnOutsideClick(popoverRef, hideMessage)

  useEffect(() => {
    if (elemRef) {
      elemRef.addEventListener('click', showMessage, false)
    }
  }, [elemRef])

  return (
    <>
      <span
        style={{
          position: 'relative'
        }}
        ref={setElemRef}
      >
        {isClicked && (
          <div className={`popover popover--${tooltipPosition} ${className}`} ref={setPopoverRef}>
            <div className="popover__inner scrollbar scrollbar--vertical pr-8">
              <Text type="primary" weight="regular" lineHeight="medium" size="small">
                {text}
              </Text>
            </div>
          </div>
        )}
        {children}
      </span>
    </>
  )
}

export default Popover
