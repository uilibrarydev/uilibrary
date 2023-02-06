import React from 'react'
import { IconPropTypes } from './types'
import './index.scss'

const Icon = (props: IconPropTypes): JSX.Element => {
  const {
    name,
    type,
    size = 'medium',
    withWrapper = false,
    onClick,
    className = '',
    refHandler
  } = props

  let content = (
    <span className={`icon icon--${size} icon--${type} ${className}`}>
      <i ref={refHandler} onClick={onClick} className={`icon-${name}`} />
    </span>
  )

  if (withWrapper) {
    content = <span className="icon-wrapper">{content}</span>
  }

  return content
}

export default Icon
