import React from 'react'
import { TextPropTypes } from './types'
import { noop } from '../../utils'

const Text: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const {
    children,
    className = '',
    type = 'primary',
    size = 'standart',
    weight = 'regular',
    lineHeight = 'medium',
    onClick = noop
  } = props
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
