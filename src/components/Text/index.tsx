import React from 'react'
import { customColors } from '../../consts'
import { TextPropTypes } from './types'
import './index.scss'

const Text: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const { children, size, color = 'textBlack' } = props
  return (
    <p style={{ color: customColors[color] }} className={`custom-text icon_${size}`}>
      {children}
    </p>
  )
}

export default Text
