import React from 'react'
import { HeadingPropTypes } from './types'
import { noop } from '../../utils'

const Heading: React.FC<HeadingPropTypes> = (props: HeadingPropTypes) => {
  const {
    children,
    className = '',
    size = 'small',
    lineHeight = 'large',
    type: As = 'h1',
    weight = 'regular',
    onClick = noop
  } = props

  return (
    <As
      onClick={onClick}
      className={`heading 
                  ${size ? `heading-${size}` : ''} 
                  ${weight ? `${weight}` : ''}
                  ${lineHeight ? `lh-${lineHeight}` : ''}
                  ${className}`}
    >
      {children}
    </As>
  )
}

export default Heading
