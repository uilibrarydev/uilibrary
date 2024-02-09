import React from 'react'
import { LinkPropTypes } from './types'
import classNames from 'classnames'


export const Link: React.FC<LinkPropTypes> = (props) => {
  const { children, afterLink, beforeLink, className = '', url, dataId = '', target } = props
  return beforeLink || afterLink ? (
    <span className={className}>
      {beforeLink}
      <a
        href={url}
        className={classNames('link', { 'ml-4': beforeLink, 'mr-4': afterLink })}
        data-id={`${dataId}-link`}
        target={target}
      >
        {children}
      </a>
      {afterLink}
    </span>
  ) : (
    <a
      href={url}
      className={classNames(`link ${className}`)}
      data-id={`${dataId}-link`}
      target={target}
    >
      {children}
    </a>
  )
}
