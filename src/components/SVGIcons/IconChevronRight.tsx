import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronRight = ({
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
      d="M8.57904 4.21967C8.28615 4.51256 8.28615 4.98744 8.57904 5.28033L15.2987 12L8.57905 18.7197C8.28615 19.0126 8.28615 19.4874 8.57905 19.7803C8.87194 20.0732 9.34681 20.0732 9.63971 19.7803L16.8897 12.5303C17.1826 12.2374 17.1826 11.7626 16.8897 11.4697L9.63971 4.21967C9.34681 3.92678 8.87194 3.92678 8.57904 4.21967Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronRight
