import React from 'react'
import { LinkPropTypes } from './types'
import '../../assets/styles/components/_link.scss'

const Link: React.FC<LinkPropTypes> = (props: LinkPropTypes) => {
  const { children, className = '', url } = props
  return (
    <a href={url} className={`link ${className}`}>
      {children}
    </a>
  )
}

export default Link
