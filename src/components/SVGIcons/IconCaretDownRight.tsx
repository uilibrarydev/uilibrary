import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretDownRight = ({
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
    <g id="Direction=Down Right, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M17.4062 7.81065L8.7169 16.5H17.1562C17.2943 16.5 17.4062 16.3881 17.4062 16.25V7.81065ZM16.7724 6.32321C17.5598 5.53575 18.9062 6.09347 18.9062 7.2071V16.25C18.9062 17.2165 18.1227 18 17.1562 18H8.11335C6.99971 18 6.44201 16.6536 7.22946 15.8661L16.7724 6.32321Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconCaretDownRight
