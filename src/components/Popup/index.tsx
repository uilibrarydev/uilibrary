import React, { useRef } from 'react'
import { useOnOutsideClick } from '../../hooks'
import Icon from '../Icon'
import { TPopupPropTypes } from './types'
import './index.css'

const Popup = (props: TPopupPropTypes): JSX.Element | null => {
  const { isOpen, onClose, children } = props
  const containerRef = useRef(null)
  useOnOutsideClick(containerRef, onClose)

  if (!isOpen) {
    return null
  }

  return (
    <div className="popup-container">
      <div className="popup-content" ref={containerRef}>
        <Icon className="close-icon" name="close" size="small" onClick={onClose} />
        {children}
      </div>
    </div>
  )
}

export default Popup
