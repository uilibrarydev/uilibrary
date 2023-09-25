import React from 'react'
import { IconPropTypes } from './types'
import './index.scss'

const Icon = (props: IconPropTypes): JSX.Element => {
  const { name, type, size = 'medium', onClick, className = '', refHandler, id } = props

  return (
    <span className={`icon icon--${size} ${type ? `color-${type}` : ''} ${className}`} id={`${id}`}>
      <i ref={refHandler} onClick={onClick} className={`icon-${name}`} />
    </span>
  )
}

export default Icon
