import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCheckmark = ({
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
      d="M5.01471 12.9697C4.72181 12.6768 4.24694 12.6768 3.95404 12.9697C3.66115 13.2626 3.66115 13.7374 3.95404 14.0303L8.45404 18.5303C8.74694 18.8232 9.22181 18.8232 9.5147 18.5303L20.5147 7.53033C20.8076 7.23744 20.8076 6.76256 20.5147 6.46967C20.2218 6.17678 19.7469 6.17678 19.454 6.46967L8.98438 16.9393L5.01471 12.9697Z"
      fill="#222222"
    />
  </svg>
)

export default IconCheckmark
