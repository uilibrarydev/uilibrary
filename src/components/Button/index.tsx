import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import { TButtonPropTypes } from './types'
import './index.scss'

const Button = (props: TButtonPropTypes): JSX.Element => {
  const {
    buttonText,
    type,
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
      className={classNames({ [type]: true, [className || '']: true, ['custom-button']: true })}
      onClick={onClick}
    >
      <div className="button-text-wrapper">
        {iconProps && <Icon {...iconProps} />}
        {buttonText}
      </div>
    </button>
  )
}

export default Button
export {}
