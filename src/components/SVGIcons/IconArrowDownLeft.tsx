import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowDownLeft = ({
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
    <g id="Direction=Down Left, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M13.2456 21.0049C13.6598 21.0049 13.9956 20.6692 13.9956 20.2549C13.9956 19.8407 13.6598 19.5049 13.2456 19.5049H5.5765L20.7763 4.30517C21.0748 4.00659 21.0748 3.52251 20.7763 3.22393C20.4777 2.92536 19.9936 2.92536 19.695 3.22393L4.49561 18.4234V10.7549C4.49561 10.3407 4.15982 10.0049 3.74561 10.0049C3.33139 10.0049 2.99561 10.3407 2.99561 10.7549V20.2549C2.99561 20.6692 3.33139 21.0049 3.74561 21.0049H13.2456Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconArrowDownLeft
