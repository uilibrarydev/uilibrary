import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSubtractFilled = ({
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
      id="Shape"
      d="M3.99609 13H19.9996C20.5519 13 20.9996 12.5523 20.9996 12C20.9996 11.4477 20.5519 11 19.9996 11H3.99609C3.44381 11 2.99609 11.4477 2.99609 12C2.99609 12.5523 3.44381 13 3.99609 13Z"
      fill="#222222"
    />
  </svg>
)

export default IconSubtractFilled
