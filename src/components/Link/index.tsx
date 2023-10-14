import React from 'react'
import { LinkPropTypes } from './types'
import '../../assets/styles/components/_link.scss'


const Link: React.FC<LinkPropTypes> = (props: LinkPropTypes) => {
  const { children, afterLink, beforeLink,className = '', url, dataId = '', taget } = props
  return (
      <>
        {beforeLink && <span className="mr-4">{beforeLink}</span>}
        <a href={url} className={`link ${className}`} data-id={`${dataId}-link`} target={taget}>
          {children}
        </a>
        {afterLink && <span className="ml-4">{afterLink}</span>}
      </>
  )
}
export default Link
