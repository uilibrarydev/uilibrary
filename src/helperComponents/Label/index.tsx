import React from 'react'
import { TextPropTypes } from './types'
import './index.scss'
import { Text } from '../../index'

const Label: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const { text, required = false, disabled = false } = props
  if (!text) {
    return null
  }
  return (
    <Text
      size="small"
      type={required ? 'danger' : disabled ? 'disabled' : 'primary'}
      className="label"
    >
      {text}
    </Text>
  )
}
export default Label
