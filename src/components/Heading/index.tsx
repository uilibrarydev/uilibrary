import React from 'react'
import { HeadingPropTypes } from './types'
import { noop } from '../../utils'

const Heading: React.FC<HeadingPropTypes> = (props: HeadingPropTypes) => {
  const { text, className = '', size, type: As = 'h1', weight, onClick = noop } = props

  return (
    <As
      onClick={onClick}
      className={`heading 
                  ${size ? `heading-${size}` : ''} 
                  ${weight ? `${weight}` : ''}
                  ${className}`}
    >
      {text}
    </As>
  )
}

export default Heading
