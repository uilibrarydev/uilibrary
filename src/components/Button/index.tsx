import React from 'react'
import Icon from '../Icon'
import { TButtonPropTypes } from './types'
import '../../assets/styles/components/_button.scss'
import Loader from '../../helperComponents/Loader'
import classnames from 'classnames'

const LITE_LOADER_TYPES = ['primary', 'danger']

const ICON_SIZE_MAPPING: { [key: string]: TIconSize } = {
  large: 'small',
  medium: 'small',
  small: 'xsmall'
}

const Button = (props: TButtonPropTypes): JSX.Element => {
  const {
    buttonText,
    type = 'primary',
    size = 'large',
    className = '',
    iconProps,
    buttonActionType = 'button',
    disabled,
    isLoading,
    formId,
    dataId = '',
    onClick,
    refHandler,
    ...rest
  } = props

  const justIcon = !buttonText && iconProps !== undefined

  return (
    <button
      ref={refHandler}
      data-id={dataId}
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
      {...rest}
    >
      {isLoading ? (
        <Loader size={size} type={LITE_LOADER_TYPES.indexOf(type) === -1 ? 'dark' : 'lite'} />
      ) : (
        <>
          {iconProps?.name ? (
            <Icon className="btn__icon" size={ICON_SIZE_MAPPING[size]} {...iconProps} />
          ) : null}
          {buttonText ? <span className="btn__text">{buttonText}</span> : null}
        </>
      )}
    </button>
  )
}

export default Button
export {}
