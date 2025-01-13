import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconUruguay = ({
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
    <g clipPath="url(#clip0_3366_16401)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 7.39118H19.6555C19.4048 6.46095 19.0237 5.58435 18.5323 4.78247H10V7.39118Z"
        fill="#338AF3"
      />
      <path
        d="M3.77516 17.826H16.2249C17.1375 17.0991 17.9202 16.2162 18.5323 15.2173H1.46777C2.07992 16.2162 2.86258 17.0991 3.77516 17.826Z"
        fill="#338AF3"
      />
      <path d="M10 0V2.17391H16.2249C14.5167 0.813437 12.3535 0 10 0Z" fill="#338AF3" />
      <path
        d="M10 7.39118H19.6555C19.4048 6.46095 19.0237 5.58435 18.5323 4.78247H10V7.39118Z"
        fill="#338AF3"
      />
      <path
        d="M0 10C0 10.9026 0.120313 11.7769 0.344492 12.6087H19.6555C19.8797 11.7769 20 10.9026 20 10H0Z"
        fill="#338AF3"
      />
      <path
        d="M8.69563 5.85248L7.4743 6.42697L8.12465 7.60979L6.79848 7.35611L6.63043 8.69576L5.70676 7.71045L4.78301 8.69576L4.615 7.35611L3.28883 7.60971L3.93915 6.42693L2.7179 5.85248L3.93918 5.27807L3.28883 4.09525L4.61497 4.34893L4.78305 3.00928L5.70676 3.99459L6.63047 3.00928L6.79848 4.34893L8.12469 4.09525L7.47434 5.27811L8.69563 5.85248Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16401">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconUruguay
