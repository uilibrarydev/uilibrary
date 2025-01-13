import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBenin = ({
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
    <g clipPath="url(#clip0_3366_14718)">
      <path
        d="M6.52176 9.13037L7.39133 19.6554C8.22309 19.8796 9.09738 19.9999 10 19.9999C15.5228 19.9999 20 15.5228 20 9.99994L6.52176 9.13037Z"
        fill="#D80027"
      />
      <path
        d="M6.52176 10L7.39129 0.344492C8.22309 0.120313 9.09738 0 10 0C15.5228 0 20 4.47719 20 10H6.52176Z"
        fill="#FFDA44"
      />
      <path
        d="M0 9.99999C0 14.6203 3.13363 18.508 7.39129 19.6555V0.344482C3.13363 1.49198 0 5.37972 0 9.99999Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14718">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBenin
