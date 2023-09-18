import React, { useEffect, useState } from 'react'
import Text from '../Text'

import '../../assets/styles/components/_popover.scss'
import { TPopoverProps } from './types'
import { useOnOutsideClick } from '../../hooks'

import classNames from 'classnames'
import { useGetTooltipStyles } from '../../hooks/useGetTooltipStyles'

export const Popover = (props: TPopoverProps): JSX.Element | null => {
  const [isClicked, setIsClicked] = useState(false)
  const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null)

  const { text, className = '', position = 'top-left', children, elemRef, id } = props
  const [parent, setElement] = useState<HTMLElement | null>(elemRef || null)

  const { tooltipPosition: popoverPosition, tooltipStyles: popoverStyles } = useGetTooltipStyles({
    elemRef: parent,
    tooltipRef: popoverRef,
    initialPosition: position
  })

  const showMessage = () => setIsClicked(true)

  const hideMessage = () => setIsClicked(false)

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id.toString())
      setElement(element)
    }
  }, [id])

  useOnOutsideClick(popoverRef, hideMessage)

  useEffect(() => {
    if (parent) {
      parent.addEventListener('click', showMessage)
    }
  }, [parent])

  useEffect(() => {
    document.addEventListener('scroll', hideMessage)
    return () => {
      document.removeEventListener('scroll', hideMessage)
    }
  }, [])

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
