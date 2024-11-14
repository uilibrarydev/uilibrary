import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCheckmarkFilled = ({
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
      d="M8.98438 16.5858L5.19148 12.7929C4.80096 12.4024 4.16779 12.4024 3.77727 12.7929C3.38674 13.1834 3.38674 13.8166 3.77727 14.2071L8.27727 18.7071C8.66779 19.0976 9.30096 19.0976 9.69148 18.7071L20.6915 7.70711C21.082 7.31658 21.082 6.68342 20.6915 6.29289C20.301 5.90237 19.6678 5.90237 19.2773 6.29289L8.98438 16.5858Z"
      fill="#222222"
    />
  </svg>
)

export default IconCheckmarkFilled
