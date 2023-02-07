import React from 'react'
import { TextPropTypes } from './types'
import { noop } from '../../utils'

const Text: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const { children, className = '', type, size, weight, lineHeight, onClick = noop } = props
  return (
    <p
      onClick={onClick}
      className={`body ${size ? `body-${size}` : ''} 
                       ${type ? `color-${type}` : ''}
                       ${weight ? `${weight}` : ''}
                       ${lineHeight ? `lh-${lineHeight}` : ''}
                       ${className}`}
    >
      {children}
    </p>
  )
}

export default Text
