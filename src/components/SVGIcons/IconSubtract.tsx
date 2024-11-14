import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSubtract = ({
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
    <g id="Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M3.75391 12.4995H20.2458C20.66 12.4995 20.9958 12.1637 20.9958 11.7495C20.9958 11.3353 20.66 10.9995 20.2458 10.9995H3.75391C3.33969 10.9995 3.00391 11.3353 3.00391 11.7495C3.00391 12.1637 3.33969 12.4995 3.75391 12.4995Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconSubtract
