import React from 'react'
import { LabelPropTypes } from './types'
import { Text } from '../../components/Text'

export const Label: React.FC<LabelPropTypes> = (props: LabelPropTypes) => {
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
        {required ? <sup>*</sup> : null}
        {labelAddons}
      </>
    </Text>
  )
}
