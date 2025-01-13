import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconUnitedArabEmirates = ({
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
    <g clipPath="url(#clip0_3366_16291)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.65219 13.4783L6.52176 19.3781C7.60504 19.7801 8.7768 20 10 20C14.2996 20 17.9651 17.2863 19.378 13.4783H5.65219Z"
        fill="black"
      />
      <path
        d="M5.65219 6.52176L6.52176 0.621914C7.60504 0.219922 8.7768 0 10 0C14.2996 0 17.9651 2.71375 19.378 6.52176H5.65219Z"
        fill="#6DA544"
      />
      <path
        d="M0 10.0001C0 14.2997 2.71379 17.9652 6.52176 19.3781V0.62207C2.71379 2.035 0 5.70043 0 10.0001Z"
        fill="#A2001D"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16291">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconUnitedArabEmirates
