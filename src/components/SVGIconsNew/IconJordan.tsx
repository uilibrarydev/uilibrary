import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconJordan = ({
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
    <g clipPath="url(#clip0_3366_16199)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.08689 6.52176H19.3779C17.965 2.71375 14.2996 0 9.99994 0C7.23846 0 4.73873 1.11949 2.9292 2.92926L6.08689 6.52176Z"
        fill="black"
      />
      <path
        d="M6.08689 13.4783H19.3779C17.965 17.2863 14.2996 20 9.99994 20C7.23846 20 4.73873 18.8805 2.9292 17.0708L6.08689 13.4783Z"
        fill="#6DA544"
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        fill="#D80027"
      />
      <path
        d="M3.96894 7.82617L4.51773 8.97379L5.75714 8.68734L5.20207 9.83191L6.19874 10.6223L4.95785 10.902L4.96128 12.174L3.96894 11.3782L2.97656 12.174L2.98003 10.902L1.73914 10.6223L2.73578 9.83191L2.18078 8.68734L3.42011 8.97379L3.96894 7.82617Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16199">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconJordan
