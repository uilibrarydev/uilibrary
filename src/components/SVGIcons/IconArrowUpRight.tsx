import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowUpRight = ({
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
    <g id="Direction=Up Right, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M10.7502 3C10.336 3 10.0002 3.33579 10.0002 3.75C10.0002 4.16421 10.336 4.5 10.7502 4.5H18.4193L3.21954 19.6998C2.92096 19.9983 2.92096 20.4824 3.21954 20.781C3.51811 21.0796 4.0022 21.0796 4.30077 20.781L19.5002 5.58158V13.25C19.5002 13.6642 19.836 14 20.2502 14C20.6644 14 21.0002 13.6642 21.0002 13.25V3.75C21.0002 3.33579 20.6644 3 20.2502 3H10.7502Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconArrowUpRight
