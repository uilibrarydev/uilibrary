import React, { useEffect, useId, useState } from 'react'
import classNames from 'classnames'
import { useHideOnScroll, useGetTooltipStyles, useOnOutsideClick } from '../../hooks'
import Text from '../Text'

import { TPopoverProps } from './types'
import '../../assets/styles/components/_popover.scss'
import Link from '../Link'

export const Popover = (props: TPopoverProps): JSX.Element | null => {
  const {
    dataId,
    text,
    linkAddons,
    className = '',
    position = 'top-left',
    children,
    elemRef,
    id,
    clicked = false
  } = props
  const [isClicked, setIsClicked] = useState(clicked)
  const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null)

  const [parent, setElement] = useState<HTMLElement | null>(elemRef || null)

  const { tooltipPosition: popoverPosition, tooltipStyles: popoverStyles } = useGetTooltipStyles({
    elemRef: parent,
    tooltipRef: popoverRef,
    initialPosition: position
  })

  const showMessage = () => setIsClicked(true)

  const hideMessage = () => setIsClicked(false)

  useHideOnScroll(hideMessage)
  useOnOutsideClick(popoverRef, hideMessage, isClicked, useId())

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id.toString())
      setElement(element)
    }
  }, [id])

  useEffect(() => {
    if (parent) {
      parent.addEventListener('click', showMessage)
    }
  }, [parent])

  return (
    <>
      {isClicked && (
        <div
          data-id={dataId}
          className={classNames(`popover popover--${popoverPosition}`, className)}
          ref={setPopoverRef}
          style={popoverStyles}
        >
          <div className="popover__inner scrollbar scrollbar--vertical pr-8">
            {!linkAddons ? (
              <Text type="primary" weight="regular" lineHeight="medium" size="small">
                {text}
              </Text>
            ) : null}

            {linkAddons ? (
              <Link
                dataId={linkAddons.dataId}
                url={linkAddons.url}
                beforeLink={linkAddons.beforeLink}
                afterLink={linkAddons.afterLink}
                taget={linkAddons.taget}
              >
                {text}
              </Link>
            ) : null}
          </div>
        </div>
      )}
      {children}
    </>
  )
}

export default Popover
