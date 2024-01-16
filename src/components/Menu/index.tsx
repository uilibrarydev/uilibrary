import React, { ReactElement, useId, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'

import { useOnOutsideClick, useGetElemSizes, useGetTooltipPosition } from '../../hooks'
import { OptionItem } from '../../helperComponents'

import { TMenuProps, TMenuItem } from './types'
import '../../assets/styles/components/_select.scss'

const GAP = 4
const Menu = (props: TMenuProps): ReactElement | null => {
  const {
    menuItems = [],
    parentRef,
    onClose,
    isOpen,
    position = 'bottom-right',
    className = '',
    dataId = ''
  } = props
  const [menuRef, setMenuRef] = useState<HTMLDivElement | null>(null)
  useOnOutsideClick(menuRef, onClose, isOpen, useId())

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
      return { left: GAP, top: GAP + height }
    }
    if (tooltipPosition === 'bottom-left') {
      return { left: -1 * menuWidth + width - GAP, top: GAP + height }
    }
    if (tooltipPosition === 'top-right') {
      return { left: GAP, top: -1 * menuHeight - GAP }
    }
    if (tooltipPosition === 'top-left') {
      return { left: -1 * menuWidth + width - GAP, top: -1 * menuHeight - GAP }
    }

    return { left: GAP, top: GAP + height }
  }, [width, tooltipPosition, menuWidth, height, menuHeight])

  if (!parentRef || !isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className={`select select--menu ${className}`} style={menuStyles} ref={setMenuRef}>
      {menuItems.map(({ label, meta, value, handler, iconProps, disabled, dataId }: TMenuItem) => {
        return (
          <OptionItem
            dataId={dataId}
            disabled={disabled}
            key={value}
            data={{
              label,
              value,
              meta
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
