import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowUpLeftFilled = ({
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
    <g id="Direction=Up Left, Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M13 3C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H6.41435L20.7071 19.2928C21.0976 19.6833 21.0976 20.3164 20.7071 20.707C20.3166 21.0975 19.6834 21.0975 19.2929 20.707L5 6.41408V13C5 13.5523 4.55228 14 4 14C3.44772 14 3 13.5523 3 13V4C3 3.44772 3.44772 3 4 3H13Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconArrowUpLeftFilled
