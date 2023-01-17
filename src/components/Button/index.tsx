import React from 'react'
import Icon from '../Icon'
import { TButtonPropTypes } from './types'
import './index.scss'

const Button = (props: TButtonPropTypes): JSX.Element => {
  const {
    buttonText,
    type = 'primary',
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
      className={`btn btn--${type} ${className || ''}`}
      onClick={onClick}
    >
        {iconProps && <Icon {...iconProps} className="btn__icon"/>}
        {buttonText}
    </button>
  )
}

export default Button
export {}
