import React from 'react'
import { TextPropTypes } from './types'
import Text from '../../components/Text'

const Label: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const {
    text,
    size = 'small',
    required = false,
    disabled = false,
    invalid = false,
    className = '',
    labelAddons
  } = props
  if (!text) {
    return null
  }
  return (
    <Text
      size={size}
      type={invalid ? 'danger' : disabled ? 'disabled' : 'primary'}
      className={`label flexbox align-items--start mb-4 ${className}`}
    >
      <>
        {text}
        {required ? <span className="label__important"> *</span> : null}
        {labelAddons}
      </>
    </Text>
  )
}
export default Label
