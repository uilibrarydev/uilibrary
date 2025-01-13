import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconIvoryCoast = ({
  size,
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
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <g clipPath="url(#clip0_3366_16181)">
      <path
        d="M10 20C11.2232 20 12.395 19.78 13.4783 19.378L13.9131 10L13.4783 0.621992C12.395 0.220039 11.2232 0 10 0C8.77682 0 7.60506 0.220039 6.52178 0.621992L6.08698 10L6.52174 19.378C7.60506 19.78 8.77682 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M0 10.0001C0 14.2997 2.71375 17.9652 6.52176 19.3781V0.62207C2.71375 2.035 0 5.70043 0 10.0001Z"
        fill="#FF9811"
      />
      <path
        d="M13.4783 0.62207V19.3781C17.2863 17.9652 20 14.2997 20 10.0001C20 5.70043 17.2863 2.035 13.4783 0.62207Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16181">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconIvoryCoast
