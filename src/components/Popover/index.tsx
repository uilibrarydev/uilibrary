import React, { useEffect, useMemo, useState } from 'react'
import { useGetElemPosition, useGetElemSizes } from '../../hooks/useGetElemPosition'

import { TPopoverProps } from './types'
import '../../assets/styles/components/_popover.scss'
import Text from '../Text'

const GAP = 20
export const Popover = (props: TPopoverProps): JSX.Element | null => {
  const [isClicked, setIsClicked] = useState(false)
  const [popoverRef, setPopoverRef] = useState<HTMLDivElement | null>(null)
  const [elemRef, setElemRef] = useState<HTMLSpanElement | null>(null)

  const { text, className = '', position = 'top-left', children } = props

  const { left, top, bottom } = useGetElemPosition(elemRef)
  const { width, height } = useGetElemSizes(popoverRef)

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

  const onClick = () => {
    console.log('mouseenter')

    setIsClicked(true)
  }
  const onMouseLeave = () => setIsClicked(false)

  useEffect(() => {
    if (elemRef) {
      elemRef.addEventListener('click', onClick, false)
      // elemRef.addEventListener('mouseleave', onMouseLeave, false)
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
          <div
            className={`popover popover--${calculatedPosition} ${className}`}
            ref={setPopoverRef}
          >
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
