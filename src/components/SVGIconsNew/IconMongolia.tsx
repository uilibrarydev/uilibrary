import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMongolia = ({
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
    <g clipPath="url(#clip0_3366_14757)">
      <path
        d="M9.99999 20C11.2232 20 12.395 19.78 13.4782 19.378L13.913 10L13.4783 0.621992C12.395 0.220039 11.2232 0 9.99999 0C8.77679 0 7.60503 0.220039 6.52175 0.621992L6.08694 10L6.52171 19.378C7.60503 19.78 8.77679 20 9.99999 20Z"
        fill="#0052B4"
      />
      <path
        d="M0 10.0001C0 14.2997 2.71375 17.9652 6.52176 19.3781V0.62207C2.71375 2.035 0 5.70043 0 10.0001Z"
        fill="#A2001D"
      />
      <path
        d="M13.4782 0.62207V19.3781C17.2862 17.9652 20 14.2997 20 10.0001C20 5.70043 17.2862 2.035 13.4782 0.62207Z"
        fill="#A2001D"
      />
      <path d="M4.78259 10H5.65216V13.4782H4.78259V10Z" fill="#FFDA44" />
      <path d="M1.30432 10H2.17389V13.4782H1.30432V10Z" fill="#FFDA44" />
      <path
        d="M3.47821 12.1737C3.95846 12.1737 4.34778 11.7844 4.34778 11.3041C4.34778 10.8239 3.95846 10.4346 3.47821 10.4346C2.99796 10.4346 2.60864 10.8239 2.60864 11.3041C2.60864 11.7844 2.99796 12.1737 3.47821 12.1737Z"
        fill="#FFDA44"
      />
      <path
        d="M3.47822 8.69546C3.71834 8.69546 3.91299 8.50081 3.91299 8.26069C3.91299 8.02058 3.71834 7.82593 3.47822 7.82593C3.23811 7.82593 3.04346 8.02058 3.04346 8.26069C3.04346 8.50081 3.23811 8.69546 3.47822 8.69546Z"
        fill="#FFDA44"
      />
      <path d="M2.6087 12.6086H4.34784V13.4782H2.6087V12.6086Z" fill="#FFDA44" />
      <path d="M2.6087 9.13037H4.34784V9.99994H2.6087V9.13037Z" fill="#FFDA44" />
      <path
        d="M3.47823 5.21729L3.78619 6.16494H4.7826L3.97655 6.75064L4.28428 7.6983L3.47823 7.1126L2.67221 7.6983L2.97994 6.75064L2.17389 6.16494H3.1703L3.47823 5.21729Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14757">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMongolia
