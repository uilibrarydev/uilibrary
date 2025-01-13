import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGreenland = ({
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
    <g clipPath="url(#clip0_3366_15875)">
      <path
        d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10C19.5652 10 10 11.3043 10 11.3043L0 10Z"
        fill="#F0F0F0"
      />
      <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10" fill="#D80027" />
      <path
        d="M6.95657 14.7825C9.59793 14.7825 11.7392 12.6413 11.7392 9.9999C11.7392 7.35854 9.59793 5.21729 6.95657 5.21729C4.3152 5.21729 2.17395 7.35854 2.17395 9.9999C2.17395 12.6413 4.3152 14.7825 6.95657 14.7825Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.17395 9.9999C2.17395 7.35861 4.3152 5.21729 6.95657 5.21729C9.59797 5.21729 11.7392 7.35857 11.7392 9.9999"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15875">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGreenland
