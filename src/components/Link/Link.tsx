import type { ReactElement } from 'react'
import React from 'react'
import type { LinkPropTypes } from './types'
import classNames from 'classnames'

export const Link = (props: LinkPropTypes): ReactElement => {
  const {
    type = 'primary',
    weight = 'regular',
    children,
    afterLink,
    beforeLink,
    disabled,
    className = '',
    url,
    dataId = '',
    target,
    iconProps,
    onclick
  } = props
  return beforeLink || afterLink ? (
    <span className={classNames({'color-disabled': disabled}, className)}>
      {beforeLink ? beforeLink + ' ' : null}
      <a
        onClick={(e) => {
          if (onclick) {
            e.preventDefault()
            onclick()
          }
        }}
        href={url}
        className={classNames('link', `link--${disabled ? 'disabled' : type}`, weight)}
        data-id={`${dataId}-link`}
        target={target}
      >
        {children}
      </a>
      {afterLink ? ' ' + afterLink : null}
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
        `link--${disabled ? 'disabled' : type}`,
        weight,
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
