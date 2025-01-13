import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTaiwan = ({
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
    <g clipPath="url(#clip0_3366_16078)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C3.43477 6.56523 6.34781 3.65219 10 0C15.5228 0 20 4.47719 20 10Z"
        fill="#D80027"
      />
      <path d="M10 10C10 4.47719 10 3.82609 10 0C4.47719 0 0 4.47719 0 10H10Z" fill="#0052B4" />
      <path
        d="M8.69566 5.85248L7.47437 6.42701L8.12468 7.60979L6.79855 7.35604L6.63047 8.69576L5.70679 7.71045L4.78304 8.69576L4.61504 7.35604L3.28886 7.60971L3.93918 6.42693L2.71793 5.85248L3.93922 5.27807L3.28886 4.09525L4.615 4.34896L4.78308 3.00928L5.70679 3.99459L6.6305 3.00928L6.79855 4.34896L8.12472 4.09525L7.47437 5.27811L8.69566 5.85248Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.70697 7.71361C6.73501 7.71361 7.56841 6.88022 7.56841 5.85217C7.56841 4.82412 6.73501 3.99072 5.70697 3.99072C4.67892 3.99072 3.84552 4.82412 3.84552 5.85217C3.84552 6.88022 4.67892 7.71361 5.70697 7.71361Z"
        fill="#0052B4"
      />
      <path
        d="M5.7068 6.84435C5.15989 6.84435 4.71497 6.39938 4.71497 5.85247C4.71497 5.30556 5.15993 4.8606 5.7068 4.8606C6.25372 4.8606 6.69868 5.30556 6.69868 5.85247C6.69864 6.39938 6.25364 6.84435 5.7068 6.84435Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16078">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconTaiwan
