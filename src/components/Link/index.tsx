import React from 'react'
import { LinkPropTypes } from './types'
import '../../assets/styles/components/_link.scss'

const Link: React.FC<LinkPropTypes> = (props: LinkPropTypes) => {
  const { children, className = '', url, dataId = '' } = props
  return (
    <a href={url} className={`link ${className}`} data-id={dataId}>
      {children}
    </a>
  )
}

export default Link
