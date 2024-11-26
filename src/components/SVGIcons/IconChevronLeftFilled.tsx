import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronLeftFilled = ({
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
      d="M15.8165 4.29289C16.207 4.68342 16.207 5.31658 15.8165 5.70711L9.52359 12L15.8165 18.2929C16.207 18.6834 16.207 19.3166 15.8165 19.7071C15.426 20.0976 14.7928 20.0976 14.4023 19.7071L7.40227 12.7071C7.01174 12.3166 7.01174 11.6834 7.40227 11.2929L14.4023 4.29289C14.7928 3.90237 15.426 3.90237 15.8165 4.29289Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronLeftFilled
