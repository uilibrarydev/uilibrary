import React from 'react'
import ReactDOM from 'react-dom'

import { TMenuPropTypes } from './types'
import '../../assets/styles/components/_select.scss'

import '../../assets/styles/components/_menu.scss'
import { OptionItem } from '../../helperComponents/OptionItem'

const Menu: React.FC<TMenuPropTypes> = (props: TMenuPropTypes) => {
  const { menuItems = [], parentRef } = props

  if (!parentRef) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="menu-container">
      {menuItems.map(({ label, value, handler, iconProps }) => {
        return (
          <OptionItem
            key={value}
            data={{
              label,
              value
            }}
            labelLeftIconProps={iconProps}
            onClick={handler}
          />
        )
      })}
    </div>,
    parentRef
  )
}

export default Menu
