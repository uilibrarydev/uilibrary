import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMexico = ({
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
    <g clipPath="url(#clip0_3366_14657)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M20 9.99992C20 6.03531 17.6928 2.60969 14.3478 0.992188V19.0076C17.6928 17.3902 20 13.9645 20 9.99992Z"
        fill="#D80027"
      />
      <path
        d="M0 9.99992C0 13.9645 2.30723 17.3902 5.65219 19.0077V0.992188C2.30723 2.60969 0 6.03531 0 9.99992Z"
        fill="#6DA544"
      />
      <path
        d="M7.3913 9.99994C7.3913 11.4407 8.55927 12.6087 10 12.6087C11.4408 12.6087 12.6087 11.4407 12.6087 9.99994V9.13037H7.3913V9.99994Z"
        fill="#6DA544"
      />
      <path
        d="M13.4782 8.26093H10.8695C10.8695 7.78069 10.4802 7.39136 9.99995 7.39136C9.51971 7.39136 9.13038 7.78069 9.13038 8.26093H6.52167C6.52167 8.7412 6.93999 9.1305 7.42018 9.1305H7.39124C7.39124 9.61077 7.78053 10.0001 8.26081 10.0001C8.26081 10.4803 8.6501 10.8696 9.13038 10.8696H10.8695C11.3498 10.8696 11.7391 10.4803 11.7391 10.0001C12.2194 10.0001 12.6087 9.61077 12.6087 9.1305H12.5797C13.0599 9.1305 13.4782 8.7412 13.4782 8.26093Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14657">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMexico
