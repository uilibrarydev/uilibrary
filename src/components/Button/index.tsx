import React from 'react'
import classNames from 'classnames'
import { TButtonPropTypes } from './types'
import './index.scss'

const Button = (props: TButtonPropTypes): JSX.Element => {
  const { buttonText, type, onClick, className } = props

  return (
    <button
      className={classNames({ [type]: true, [className || '']: true, ['custom-button']: true })}
      onClick={onClick}
    >{`${buttonText}  `}</button>
  )
}

export default Button
