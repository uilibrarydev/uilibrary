import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSolomonIslands = ({
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
    <g clipPath="url(#clip0_3366_15791)">
      <path
        d="M17.0713 17.0712C20.8218 13.3208 20.9698 7.33311 17.5172 3.40503L9.99998 9.99982L3.40515 17.517C7.33323 20.9697 13.3209 20.8216 17.0713 17.0712Z"
        fill="#496E2D"
      />
      <path
        d="M2.92865 2.92867C6.67907 -0.821755 12.6668 -0.969841 16.5948 2.48285L9.99996 10.0001L2.48287 16.5949C-0.969861 12.6668 -0.821736 6.67909 2.92865 2.92867Z"
        fill="#0052B4"
      />
      <path
        d="M16.5948 2.48291L2.48279 16.5949C2.62544 16.7572 2.77357 16.9164 2.92861 17.0714C3.08361 17.2264 3.24286 17.3745 3.40521 17.5173L17.5171 3.40525C17.3744 3.24291 17.2263 3.08369 17.0712 2.92865C16.9163 2.77373 16.7571 2.62557 16.5948 2.48291Z"
        fill="#FFDA44"
      />
      <path
        d="M4.21328 3.47803L4.42918 4.14236H5.12766L4.56258 4.55287L4.7784 5.2172L4.21328 4.80662L3.64817 5.2172L3.86407 4.55287L3.29895 4.14236H3.99746L4.21328 3.47803Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.78122 3.47803L7.99711 4.14236H8.69555L8.13047 4.55287L8.34633 5.2172L7.78122 4.80662L7.2161 5.2172L7.432 4.55287L6.86688 4.14236H7.56536L7.78122 3.47803Z"
        fill="#F0F0F0"
      />
      <path
        d="M4.21328 6.9563L4.42918 7.62063H5.12766L4.56258 8.03118L4.7784 8.69551L4.21328 8.28493L3.64817 8.69551L3.86407 8.03118L3.29895 7.62063H3.99746L4.21328 6.9563Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.78122 6.9563L7.99711 7.62063H8.69555L8.13047 8.03118L8.34633 8.69551L7.78122 8.28493L7.2161 8.69551L7.432 8.03118L6.86688 7.62063H7.56536L7.78122 6.9563Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.99726 5.21729L6.21316 5.88162H6.91159L6.34652 6.29217L6.56237 6.9565L5.99726 6.54592L5.43214 6.9565L5.648 6.29217L5.08289 5.88162H5.7814L5.99726 5.21729Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15791">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSolomonIslands
