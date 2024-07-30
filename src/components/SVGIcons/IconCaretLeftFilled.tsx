import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretLeftFilled = ({
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
    <g id="Direction=Left, Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M15.9062 17.8983C15.9062 18.9722 14.6413 19.5462 13.8331 18.839L7.52242 13.3172C6.7256 12.6199 6.7256 11.3804 7.52242 10.6831L13.8331 5.16132C14.6413 4.45412 15.9062 5.02809 15.9062 6.10204L15.9062 17.8983Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconCaretLeftFilled
