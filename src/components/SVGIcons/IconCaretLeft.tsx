import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretLeft = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      id="Shape"
      d="M13.8331 18.839C14.6413 19.5462 15.9062 18.9722 15.9062 17.8983L15.9062 6.10204C15.9062 5.02809 14.6413 4.45412 13.8331 5.16132L7.52242 10.6831C6.7256 11.3804 6.7256 12.6199 7.52242 13.3172L13.8331 18.839ZM14.4062 17.3473L8.51018 12.1883C8.39635 12.0887 8.39635 11.9116 8.51018 11.812L14.4062 6.65298L14.4062 17.3473Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretLeft
