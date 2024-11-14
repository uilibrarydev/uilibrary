import type { ReactElement } from 'react';
import React from 'react'
import type { LinkPropTypes } from './types'
import classNames from 'classnames'

export const Link = (props: LinkPropTypes): ReactElement => {
  const {
    children,
    afterLink,
    beforeLink,
    className = '',
    url,
    dataId = '',
    target,
    onclick
  } = props
  return beforeLink || afterLink ? (
    <span className={className}>
      {beforeLink}
      <a
        onClick={(e) => {
          if (onclick) {
            e.preventDefault()
            onclick()
          }
        }}
        href={url}
        className={'link'}
        data-id={`${dataId}-link`}
        target={target}
      >
        {children}
      </a>
      {afterLink}
    </span>
  ) : (
    <a
      onClick={(e) => {
        if (onclick) {
          e.preventDefault()
          onclick()
        }
      }}
      href={url}
      className={classNames(`link ${className}`)}
      data-id={`${dataId}-link`}
      target={target}
    >
      {children}
    </a>
  )
}
