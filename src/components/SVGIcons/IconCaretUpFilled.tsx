import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretUpFilled = ({
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
      d="M6.19555 16.9814C5.1216 16.9814 4.54762 15.7165 5.25483 14.9083L10.7767 8.59765C11.4739 7.80083 12.7135 7.80083 13.4107 8.59765L18.9325 14.9083C19.6397 15.7165 19.0657 16.9814 17.9918 16.9814H6.19555Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretUpFilled
