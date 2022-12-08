import React from 'react'
import { customColors } from '../../consts'
import { TextPropTypes } from './types'
import './index.scss'
import { noop } from '../../utils'

const Text: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const { children, className = '', size = 'small', color = 'textBlack', onClick = noop } = props
  return (
    <p
      onClick={onClick}
      style={{ color: customColors[color] }}
      className={`custom_text custom_text_${size} ${className}`}
    >
      {children}
    </p>
  )
}

export default Text
