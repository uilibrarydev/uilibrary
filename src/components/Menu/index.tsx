import React, { ReactElement, useId, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'

import {
  useOnOutsideClick,
  useGetElemPositions,
  useGetElemSizes,
  useGetTooltipPosition
} from '../../hooks'
import { OptionItem } from '../../helperComponents'

import { TMenuProps, TMenuItem } from './types'
import '../../assets/styles/components/_select.scss'

const Menu = (props: TMenuProps): ReactElement | null => {
  const { menuItems = [], parentRef, onClose, isOpen, position = 'bottom-right' } = props
  const [menuRef, setMenuRef] = useState<HTMLDivElement | null>(null)
  useOnOutsideClick(menuRef, onClose, isOpen, useId())

  const { left, top } = useGetElemPositions(parentRef)
  const { width, height } = useGetElemSizes(parentRef)
  const { width: menuWidth, height: menuHeight } = useGetElemSizes(menuRef)

  const tooltipPosition = useGetTooltipPosition({
    tooltipRef: menuRef,
    elemRef: parentRef,
    initialPosition: position,
    hasTriangle: false
  })

  const menuStyles = useMemo(() => {
    if (tooltipPosition === 'bottom-right') {
      return { left: left + 4, top: top + 4 + height }
    }
    if (tooltipPosition === 'bottom-left') {
      return { left: left - menuWidth + width, top: top + 4 + height }
    }
    if (tooltipPosition === 'top-right') {
      return { left: left + 4, top: top - menuHeight - 4 }
    }
    if (tooltipPosition === 'top-left') {
      return { left: left - menuWidth + width, top: top - menuHeight - 4 }
    }

    return { left: left, top: top + 4 + height }
  }, [left, top, width, tooltipPosition, menuWidth, height, menuHeight])

  if (!parentRef || !isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="select select--menu" style={menuStyles} ref={setMenuRef}>
      {menuItems.map(({ label, value, handler, iconProps, disabled }: TMenuItem) => {
        return (
          <OptionItem
            disabled={disabled}
            key={value}
            data={{
              label,
              value
            }}
            labelLeftIconProps={iconProps}
            onClick={() => {
              onClose()
              if (handler) {
                handler()
              }
            }}
          />
        )
      })}
    </div>,
    parentRef
  )
}

export default Menu
