import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCuba = ({
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
    <g clipPath="url(#clip0_3366_15386)">
      <path d="M4.6875e-05 1.73926H0V18.261H4.6875e-05V10.0002V1.73926Z" fill="#FF9811" />
      <path
        d="M9.99996 19.9999C15.5228 19.9999 19.9999 15.5228 19.9999 9.99996C19.9999 4.47713 15.5228 0 9.99996 0C4.47713 0 0 4.47713 0 9.99996C0 15.5228 4.47713 19.9999 9.99996 19.9999Z"
        fill="#F0F0F0"
      />
      <path
        d="M10.0001 0C6.7285 0 3.82405 1.57121 1.99963 4H18.0005C16.1761 1.57117 13.2716 0 10.0001 0Z"
        fill="#0052B4"
      />
      <path
        d="M10.0001 19.9998C13.2716 19.9998 16.1761 18.4285 18.0005 15.9998H1.99963C3.82401 18.4286 6.7285 19.9998 10.0001 19.9998Z"
        fill="#0052B4"
      />
      <path
        d="M6.10352e-05 10C6.10352e-05 10.685 0.0691235 11.3538 0.200334 12H19.7998C19.931 11.3538 20.0001 10.685 20.0001 10C20.0001 9.31504 19.931 8.64621 19.7998 8H0.200334C0.0691235 8.64621 6.10352e-05 9.31504 6.10352e-05 10Z"
        fill="#0052B4"
      />
      <path
        d="M2.92896 2.92896C-0.976238 6.83415 -0.976238 13.1658 2.92896 17.0711C4.54275 15.4573 6.09478 13.9052 10 10L2.92896 2.92896Z"
        fill="#D80027"
      />
      <path
        d="M4.04731 7.39136L4.69473 9.38413H6.79028L5.09509 10.6158L5.74251 12.6087L4.04731 11.377L2.35204 12.6087L2.99962 10.6158L1.30438 9.38413H3.39977L4.04731 7.39136Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15386">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCuba
