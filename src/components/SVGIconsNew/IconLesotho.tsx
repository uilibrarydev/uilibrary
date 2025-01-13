import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconLesotho = ({
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
    <g clipPath="url(#clip0_3366_16388)">
      <path
        d="M0 9.9999C0 11.5581 0.356523 13.033 0.992266 14.3477L10 14.7825L19.0077 14.3478C19.6435 13.033 20 11.5581 20 9.9999C20 8.4417 19.6435 6.96678 19.0077 5.65209L10 5.21729L0.992266 5.65205C0.356523 6.96678 0 8.4417 0 9.9999H0Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 20.0001C13.9646 20.0001 17.3903 17.6929 19.0078 14.3479H0.99231C2.60981 17.6929 6.03543 20.0001 10 20.0001Z"
        fill="#6DA544"
      />
      <path
        d="M10 0C6.03543 0 2.60981 2.30723 0.99231 5.65219H19.0077C17.3903 2.30723 13.9646 0 10 0Z"
        fill="#0052B4"
      />
      <path
        d="M10.6522 9.78265V7.39136H9.34785V9.78265L7.77246 11.3581C8.23063 12.1081 9.05684 12.6087 10 12.6087C10.9432 12.6087 11.7694 12.1081 12.2276 11.3581L10.6522 9.78265Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16388">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconLesotho
