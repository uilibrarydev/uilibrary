import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
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
    <path
      d="M5.25483 10.0731C4.54762 9.2649 5.1216 8 6.19555 8H17.9918C19.0657 8 19.6397 9.2649 18.9325 10.0731L13.4107 16.3838C12.7135 17.1806 11.4739 17.1806 10.7767 16.3838L5.25483 10.0731ZM6.74649 9.5L11.9055 15.396C12.0051 15.5099 12.1822 15.5099 12.2818 15.396L17.4408 9.5H6.74649Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretDown
