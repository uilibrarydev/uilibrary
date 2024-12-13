import type { ReactElement } from 'react'
import React from 'react'
import type { LinkPropTypes } from './types'
import classNames from 'classnames'

export const Link = (props: LinkPropTypes): ReactElement => {
  const {
    type = 'secondary',
    children,
    afterLink,
    beforeLink,
    className = '',
    url,
    dataId = '',
    target,
    iconProps,
    onclick
  } = props
  return beforeLink || afterLink ? (
    <span className={className}>
      {beforeLink + ' '}
      <a
        onClick={(e) => {
          if (onclick) {
            e.preventDefault()
            onclick()
          }
        }}
        href={url}
        className={classNames('link', `link--${type}`)}
        data-id={`${dataId}-link`}
        target={target}
      >
        {children}
      </a>
      {' ' + afterLink}
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
      className={classNames(
        'link',
        `link--${type}`,
        {
          [`link--icon-${iconProps?.alignment || 'left'}`]: iconProps?.Component
        },
        className
      )}
      data-id={`${dataId}-link`}
      target={target}
    >
      <>
        {iconProps?.Component ? <iconProps.Component size="small" className="link__icon" /> : null}
        {children}
      </>
    </a>
  )
}
