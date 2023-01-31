import React from 'react'
import Icon from '../Icon'
import { TButtonPropTypes } from './types'

const Button = (props: TButtonPropTypes): JSX.Element => {
  const {
    buttonText,
    type,
    size,
    className = '',
    iconProps,
    justIcon,
    buttonActionType,
    disabled,
    isLoading,
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
                  ${isLoading && 'btn--loading'}
                  ${className}`}
      onClick={onClick}
    >
      {iconProps?.name && (
        <Icon
          {...iconProps}
          className="btn__icon"
          size={`${size == 'large' ? 'medium' : size == 'medium' ? 'small' : 'xsmall'}`}
        />
      )}
      {isLoading || (!justIcon && buttonText)}
    </button>
  )
}

export default Button
export {}
