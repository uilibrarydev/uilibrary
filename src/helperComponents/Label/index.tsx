import React from 'react'
import { TextPropTypes } from './types'
import './index.scss'
import { Text } from '../../index'

const Label: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const { text, required = false } = props
  if (!text) {
    return null
  }
  return <Text size="small" className={`label ${required && 'label--required'}`}>{text}</Text>
}

export default Label
