import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconQatar = ({
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
    <g clipPath="url(#clip0_3366_15380)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M20 10C20 4.47719 15.5228 0 10 0C8.04376 0 6.21899 0.562305 4.67766 1.53324L6.86958 2.46453L3.91306 3.7207L6.86958 4.97684L3.91306 6.23293L6.86958 7.48898L3.91306 8.74488L6.86958 10.0007L3.91306 11.2568L6.86958 12.5128L3.91306 13.7687L6.86958 15.0247L3.91306 16.2808L6.86958 17.5367L4.67864 18.4675C6.21977 19.438 8.04415 20 10 20C15.5228 20 20 15.5228 20 10Z"
        fill="#751A46"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15380">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconQatar
