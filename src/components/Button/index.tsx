import React from 'react'
import Icon from '../Icon'
import { TButtonPropTypes } from './types'

const Button = (props: TButtonPropTypes): JSX.Element => {
  const {
    buttonText,
    type = 'primary',
    size = 'large',
    className,
    iconProps,
    justIcon,
    buttonActionType,
    disabled = false,
    isLoading = false,
    onClick
  } = props

  return (
    <button
      disabled={disabled}
      type={buttonActionType}
      className={`btn btn--${type} btn--${size}
                  ${
                    !isLoading &&
                    iconProps?.name &&
                    !justIcon &&
                    `btn--icon-${iconProps?.alignment}`
                  } 
                  ${justIcon && 'btn--icon'}
                  ${className || ''}`}
      onClick={onClick}
    >
      {iconProps?.name && <Icon {...iconProps} className="btn__icon" />}
      {isLoading || (!justIcon && buttonText)}
    </button>
  )
}

export default Button
export {}
