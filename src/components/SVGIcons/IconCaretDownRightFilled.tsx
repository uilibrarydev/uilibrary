import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretDownRightFilled = ({
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
    <g id="Direction=Down Right, Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M18.9062 7.2071C18.9062 6.09347 17.5598 5.53575 16.7724 6.32321L7.22946 15.8661C6.44201 16.6536 6.99971 18 8.11335 18H17.1562C18.1227 18 18.9062 17.2165 18.9062 16.25V7.2071Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconCaretDownRightFilled
