import React from 'react'
import ReactDOM from 'react-dom'

import { TMenuPropTypes } from './types'

import '../../assets/styles/components/_menu.scss'
import Icon from '../Icon'

const Menu: React.FC<TMenuPropTypes> = (props: TMenuPropTypes) => {
  const { menuItems = [], parentRef } = props

  if (!parentRef) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="menu-container">
      {menuItems.map(({ label, handler, iconProps }) => {
        return (
          <>
            <div className="menu-item" onClick={handler}>
              {iconProps?.name ? (
                <Icon {...iconProps} type="brand" size="xsmall" className="menu-item__icon" />
              ) : null}
              <span className="menu-item__label">{label}</span>
            </div>
          </>
        )
      })}
    </div>,
    parentRef
  )
}

export default Menu
