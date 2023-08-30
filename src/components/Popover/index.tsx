import React, { useEffect, useState } from 'react'
import Text from '../Text'

import '../../assets/styles/components/_popover.scss'
import { TPopoverProps } from './types'
import { useOnOutsideClick } from '../../hooks'
import { useGetPopoverStyles } from '../../hooks/useGetPopoverStyles'
import classNames from 'classnames'

export const Popover = (props: TPopoverProps): JSX.Element | null => {
  const [isClicked, setIsClicked] = useState(false)
  const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null)

  const { text, className = '', position = 'top-left', children, elemRef } = props

  const { popoverPosition, popoverStyles } = useGetPopoverStyles({
    elemRef,
    popoverRef: popoverRef,
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
      {isClicked && (
        <div
          className={classNames(`popover popover--${popoverPosition}`, className)}
          ref={setPopoverRef}
          style={popoverStyles}
        >
          <div className="popover__inner scrollbar scrollbar--vertical pr-8">
            <Text type="primary" weight="regular" lineHeight="medium" size="small">
              {text}
            </Text>
          </div>
        </div>
      )}
      {children}
    </>
  )
}

export default Popover
