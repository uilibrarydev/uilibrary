import React from 'react'
import ReactDOM from 'react-dom'

import { TMenuProps, TMenuItem } from './types'
import '../../assets/styles/components/_select.scss'

import { OptionItem } from '../../helperComponents/OptionItem'
import { useOnOutsideClick } from '../../hooks'

const Menu = (props: TMenuProps): JSX.Element | null => {
  const { menuItems = [], parentRef, onClose } = props

  useOnOutsideClick(parentRef, onClose)

  if (!parentRef) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="select select--menu">
      {menuItems.map(({ label, value, handler, iconProps }: TMenuItem) => {
        return (
          <OptionItem
            key={value}
            data={{
              label,
              value
            }}
            labelLeftIconProps={iconProps}
            onClick={() => {
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
