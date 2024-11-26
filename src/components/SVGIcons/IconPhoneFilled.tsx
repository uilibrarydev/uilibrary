import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPhoneFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M15.7441 2C16.9868 2 17.9941 3.00736 17.9941 4.25V19.75C17.9941 20.9926 16.9868 22 15.7441 22H8.24414C7.0015 22 5.99414 20.9926 5.99414 19.75V4.25C5.99414 3.00736 7.0015 2 8.24414 2H15.7441ZM13.2441 18H10.7441C10.3299 18 9.99414 18.3358 9.99414 18.75C9.99414 19.1642 10.3299 19.5 10.7441 19.5H13.2441C13.6584 19.5 13.9941 19.1642 13.9941 18.75C13.9941 18.3358 13.6584 18 13.2441 18Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconPhoneFilled
