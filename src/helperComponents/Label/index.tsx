import React from 'react'
import { TextPropTypes } from './types'
import './index.scss'
import { Text } from '../../index'

const Label: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const { text, required = false, disabled = false, invalid = false, className = '', labelAddons } = props
  if (!text) {
    return null
  }
  return (
    <Text
      size="small"
      type={invalid ? 'danger' : disabled ? 'disabled' : 'primary'}
      className={`label flexbox align-items--center ${className}`}
    >
      <>
        {text}
        {required ? <span className="label_important"> *</span> : null}
        {labelAddons}
      </>
    </Text>
  )
}
export default Label
