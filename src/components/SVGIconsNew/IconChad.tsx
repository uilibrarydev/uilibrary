import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChad = ({
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
    <g clipPath="url(#clip0_3366_15145)">
      <path
        d="M9.99996 0C8.77676 0 7.605 0.220039 6.52172 0.621992L6.08691 10L6.52168 19.378C7.605 19.78 8.77676 20 9.99996 20C11.2232 20 12.3949 19.78 13.4782 19.378L13.913 10L13.4782 0.621992C12.3949 0.220039 11.2232 0 9.99996 0V0Z"
        fill="#FFDA44"
      />
      <path
        d="M20 10.0001C20 5.70043 17.2863 2.035 13.4783 0.62207V19.3781C17.2863 17.9652 20 14.2997 20 10.0001Z"
        fill="#D80027"
      />
      <path
        d="M6.52176 19.3781V0.62207C2.71375 2.035 0 5.70043 0 10.0001C0 14.2997 2.71375 17.9652 6.52176 19.3781Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15145">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconChad
