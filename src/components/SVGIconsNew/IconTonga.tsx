import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTonga = ({
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
    <g clipPath="url(#clip0_3366_16140)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.52174 5.21742V3.91309H5.21736V5.21742H3.91302V6.5218H5.21736V7.82613H6.52174V6.5218H7.82607V5.21742H6.52174Z"
        fill="#D80027"
      />
      <path
        d="M10 0V10C4.47719 10 2.28223 10 0 10C0 15.5228 4.47719 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47719 15.5228 0 10 0Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16140">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconTonga
