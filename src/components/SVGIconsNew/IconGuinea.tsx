import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGuinea = ({
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
    <g clipPath="url(#clip0_3366_15932)">
      <path
        d="M13.4784 0.622031C12.395 0.220039 11.2232 0 10 0C8.77684 0 7.60512 0.220039 6.52184 0.621953L6.08704 10L6.5218 19.378C7.60512 19.78 8.77684 20 10 20C11.2233 20 12.395 19.78 13.4784 19.378L13.9131 10L13.4784 0.622031Z"
        fill="#FFDA44"
      />
      <path
        d="M0 10.0001C0 14.2997 2.71375 17.9652 6.52176 19.3781V0.62207C2.71375 2.03504 0 5.70043 0 10.0001Z"
        fill="#D80027"
      />
      <path
        d="M20 10.0001C20 5.70043 17.2862 2.03504 13.4782 0.62207V19.3781C17.2862 17.9652 20 14.2997 20 10.0001Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15932">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGuinea
