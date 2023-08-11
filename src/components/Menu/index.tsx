import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'

import { TMenuProps, TMenuItem } from './types'
import '../../assets/styles/components/_select.scss'

import { OptionItem } from '../../helperComponents/OptionItem'
import { useOnOutsideClick } from '../../hooks'
import { useGetElemPositions } from '../../hooks/useGetElemPositions'
import { useGetElemSizes } from '../../hooks/useGetElemSizes'
import './index.scss'

const Menu = (props: TMenuProps): JSX.Element | null => {
  const { menuItems = [], parentRef, onClose, position = 'right' } = props

  useOnOutsideClick(parentRef, onClose)

  const { left, top } = useGetElemPositions(parentRef)
  const { width } = useGetElemSizes(parentRef)

  const menuStyles = useMemo(() => {
    if (position === 'right') {
      return { left: left + width + 4, top: top }
    }
    return { left: left, top: top + 4 }
  }, [left, top, width, position])

  if (!parentRef) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="select select--menu" style={menuStyles}>
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
            onClick={(e) => {
              onClose()
              handler()
            }}
          />
        )
      })}
    </div>,
    parentRef
  )
}

export default Menu
