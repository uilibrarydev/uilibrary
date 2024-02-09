import React from 'react'
import { LabelPropTypes } from './types'
import { Text } from '../../components/Text'

export const Label: React.FC<LabelPropTypes> = (props: LabelPropTypes) => {
  const {
    text,
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
      size="small"
      type={invalid ? 'danger' : disabled ? 'disabled' : 'primary'}
      className={`label flexbox align-items--start ${className}`}
    >
      <>
        {text}
        {required ? <span className="label_important"> *</span> : null}
        {labelAddons}
      </>
    </Text>
  )
}
