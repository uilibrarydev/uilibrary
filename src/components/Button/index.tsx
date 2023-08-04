import React from 'react'
import Icon from '../Icon'
import { TButtonPropTypes } from './types'
import '../../assets/styles/components/_button.scss'
import Loader from '../../helperComponents/Loader'

const Button = (props: TButtonPropTypes): JSX.Element => {
  const {
    buttonText,
    type = 'primary',
    size = 'large',
    className = '',
    iconProps,
    buttonActionType,
    disabled,
    isLoading,
    onClick
  } = props
  const justIcon = !buttonText && iconProps !== undefined
  return (
    <button
      disabled={disabled}
      type={buttonActionType}
      className={`btn btn--${type} btn--${size}
                  ${
                    !isLoading &&
                    !justIcon &&
                    iconProps?.name &&
                    `btn--icon-${iconProps?.alignment || 'left'}`
                  } 
                  ${justIcon ? 'btn--icon' : ''}
                  ${isLoading ? 'btn--loading' : ''}
                  ${className}`}
      onClick={onClick}
    >
      {isLoading ? (
        <Loader size={size} type={type === 'primary' || type === 'danger' ? 'lite' : 'dark'} />
      ) : (
        <>
          {iconProps?.name ? (
            <Icon
              {...iconProps}
              className="btn__icon"
              size={`${size == 'large' ? 'small' : size == 'medium' ? 'small' : 'xsmall'}`}
            />
          ) : null}
          {buttonText ? <span className="btn__text">{buttonText}</span> : null}
        </>
      )}
    </button>
  )
}

export default Button
export {}
