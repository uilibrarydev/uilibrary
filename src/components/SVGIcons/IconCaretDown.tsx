import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretDown = ({
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
    <g id="Direction=Down, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M6.06733 10.0731C5.36012 9.2649 5.9341 8 7.00805 8H18.8043C19.8782 8 20.4522 9.2649 19.745 10.0731L14.2232 16.3838C13.526 17.1806 12.2864 17.1806 11.5892 16.3838L6.06733 10.0731ZM7.55899 9.5L12.718 15.396C12.8176 15.5099 12.9947 15.5099 13.0943 15.396L18.2533 9.5H7.55899Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconCaretDown
