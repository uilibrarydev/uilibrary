import React from 'react'
import type { LabelPropTypes } from './types'
import { Text } from '../../components/Text'

export const Label: React.FC<LabelPropTypes> = (props: LabelPropTypes) => {
  const {
    text,
    size = 'standard',
    required = false,
    disabled = false,
    className = '',
    labelAddons
  } = props
  if (!text) {
    return null
  }
  return (
    <Text
      size={size}
      weight={'semibold'}
      type={disabled ? 'disabled' : 'primary'}
      className={`label flexbox align-items--start mb-8 ${className}`}
    >
      <>
        {text}
        {required ? <sup>*</sup> : null}
        {labelAddons}
      </>
    </Text>
  )
}
