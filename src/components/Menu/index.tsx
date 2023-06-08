import React from 'react'
import ReactDOM from 'react-dom'

import { TMenuPropTypes } from './types'

import './index.scss'

const Menu: React.FC<TMenuPropTypes> = (props: TMenuPropTypes) => {
  const { menuItems = [], parentRef } = props

  if (!parentRef) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="menu-container">
      {menuItems.map(({ label, handler, icon }) => {
        return (
          <>
            <p>{icon}</p>
            <p> {label}</p>
          </>
        )
      })}
    </div>,
    parentRef
  )
}

export default Menu
