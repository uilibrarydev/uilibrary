import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronRightFilled = ({
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
      d="M8.40227 4.29289C8.01174 4.68342 8.01174 5.31658 8.40227 5.70711L14.6952 12L8.40227 18.2929C8.01174 18.6834 8.01174 19.3166 8.40227 19.7071C8.79279 20.0976 9.42596 20.0976 9.81648 19.7071L16.8165 12.7071C17.207 12.3166 17.207 11.6834 16.8165 11.2929L9.81648 4.29289C9.42596 3.90237 8.79279 3.90237 8.40227 4.29289Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronRightFilled
