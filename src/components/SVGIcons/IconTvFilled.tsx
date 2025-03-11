import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTvFilled = ({
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
      d="M4.75 4C3.23122 4 2 5.23122 2 6.75V15.25C2 16.7688 3.23122 18 4.75 18H19.25C20.7688 18 22 16.7688 22 15.25V6.75C22 5.23122 20.7688 4 19.25 4H4.75ZM5 20.25C5 19.8358 5.33579 19.5 5.75 19.5H18.25C18.6642 19.5 19 19.8358 19 20.25C19 20.6642 18.6642 21 18.25 21H5.75C5.33579 21 5 20.6642 5 20.25Z"
      fill="#222222"
    />
  </svg>
)

export default IconTvFilled
