import React from 'react'
import classNames from 'classnames'
import { TButtonPropTypes } from './types'
import './index.scss'
import Icon from '../Icon'

const Button = (props: TButtonPropTypes): JSX.Element => {
  const { buttonText, type, onClick, className, iconProps } = props

  return (
    <button
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
