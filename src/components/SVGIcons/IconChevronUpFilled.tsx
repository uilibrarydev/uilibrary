import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronUpFilled = ({
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
      d="M4.40227 15.7071C4.79279 16.0976 5.42596 16.0976 5.81648 15.7071L12.1094 9.41421L18.4023 15.7071C18.7928 16.0976 19.426 16.0976 19.8165 15.7071C20.207 15.3166 20.207 14.6834 19.8165 14.2929L12.8165 7.29289C12.426 6.90237 11.7928 6.90237 11.4023 7.29289L4.40227 14.2929C4.01174 14.6834 4.01174 15.3166 4.40227 15.7071Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronUpFilled
