import React from 'react'
import Icon from '../Icon'
import { TButtonPropTypes } from './types'
import '../../assets/styles/components/_button.scss'
import classnames from 'classnames'

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
    formId,
    onClick
  } = props
  const justIcon = !buttonText && iconProps !== undefined
  return (
    <button
      disabled={disabled}
      type={buttonActionType}
      className={classnames(
        'btn',
        `btn--${type}`,
        `btn--${size}`,
        {
          'btn--icon': justIcon,
          [`btn--icon-${iconProps?.alignment || 'left'}`]:
            !isLoading && !justIcon && iconProps?.name,
          'btn--loading': isLoading
        },
        className
      )}
      onClick={onClick}
      form={formId}
    >
      {iconProps?.name ? (
        <Icon
          {...iconProps}
          className="btn__icon"
          size={`${size == 'large' ? 'small' : size == 'medium' ? 'small' : 'xsmall'}`}
        />
      ) : null}

      {buttonText ? (
        <span className="btn__text">{isLoading || (!justIcon && buttonText)}</span>
      ) : null}
    </button>
  )
}

export default Button
export {}
