import React, { useEffect, useState } from 'react'
import { useGetTooltipPosition } from '../../hooks/useGetTooltipPosition'
import Text from '../Text'

import '../../assets/styles/components/_popover.scss'
import { TPopoverProps } from './types'

export const Popover = (props: TPopoverProps): JSX.Element | null => {
  const [isClicked, setIsClicked] = useState(false)
  const [popoverRef, setPopoverRef] = useState<HTMLDivElement | null>(null)
  const [elemRef, setElemRef] = useState<HTMLSpanElement | null>(null)

  const { text, className = '', position = 'top-left', children } = props

  const tooltipPosition = useGetTooltipPosition({
    tooltipRef: popoverRef,
    elemRef,
    initialPosition: position
  })
  const onClick = () => {
    setIsClicked(true)
  }

  useEffect(() => {
    if (elemRef) {
      elemRef.addEventListener('click', onClick, false)
    }
  }, [elemRef])

  return (
    <>
      <span
        style={{
          position: 'relative',
          margin: '100px 300px',
          display: 'inline-block',
          boxSizing: 'border-box'
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
