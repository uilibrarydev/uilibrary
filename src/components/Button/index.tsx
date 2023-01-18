import React from 'react'
import Icon from '../Icon'
import { TButtonPropTypes } from './types'
import './index.scss'

const Button = (props: TButtonPropTypes): JSX.Element => {
  const {
    buttonText,
    type = 'primary',
    size = 'large',
    iconAlignment = 'left-icon',
    onClick,
    className,
    iconProps,
    buttonActionType,
    disabled = false
  } = props

  return (
    <button
      disabled={disabled}
      type={buttonActionType}
      className={`btn btn--${type} btn--${size} btn--icon-${iconAlignment} ${className || ''}`}
      onClick={onClick}
    >
      {iconProps && <Icon {...iconProps} className="btn__icon" />}
      {iconAlignment !== 'center' && buttonText}
    </button>
  )
}

export default Button
export {}
