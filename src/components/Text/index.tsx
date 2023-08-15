import React from 'react'
import { TextPropTypes } from './types'
import { noop } from '../../utils'

const Text: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const {
    children,
    className = '',
    type = 'primary',
    size = 'standard',
    weight = 'regular',
    lineHeight = 'medium',
    dataId = '',
    onClick = noop
  } = props
  return (
    <p
      data-id={dataId}
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
