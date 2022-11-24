import React from 'react'
import { TextPropTypes } from './types'

const Text: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  return <p>{props.text || 'test'}</p>
}

export default Text
