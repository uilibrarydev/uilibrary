import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDatabaseFilled = ({
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
        d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10ZM18.3277 10.1701C18.9156 9.87611 19.4979 9.50399 20 9.05337V18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18V9.05337C4.50211 9.50399 5.08441 9.87611 5.67233 10.1701C7.36922 11.0185 9.60849 11.5 12 11.5C14.3915 11.5 16.6308 11.0185 18.3277 10.1701Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconDatabaseFilled
