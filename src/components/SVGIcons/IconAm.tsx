import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAm = ({
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
    <rect y="3.43005" width="24" height="17.1429" rx="2" fill="white" />
    <mask
      id="mask0_1993_1683"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.43005" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_1993_1683)">
      <path d="M0 14.8587H24V9.14441H0V14.8587Z" fill="#1047B9" />
      <path d="M0 9.14434H24V3.43005H0V9.14434Z" fill="#F01C31" />
      <path d="M0 20.5729H24V14.8586H0V20.5729Z" fill="#FECB2F" />
    </g>
  </svg>
)

export default IconAm
