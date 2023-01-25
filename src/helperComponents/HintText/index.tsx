import React from 'react'
import { HintTextProps } from './types'
import './index.scss'
import { Icon } from '../../index'

const HintText = (props: HintTextProps): JSX.Element => {
  const { text, icon } = props
  return (
    <div className="hint-text">
      {icon && <Icon name={icon} className="hint-text__icon" />}
      <span>{text}</span>
    </div>
  )
}

export default HintText
