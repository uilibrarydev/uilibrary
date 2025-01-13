import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDjibouti = ({
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
    <g clipPath="url(#clip0_3366_15425)">
      <path
        d="M9.13042 10.8696C9.13042 10.8696 2.93475 2.92754 2.92889 2.92895C4.7385 1.1193 7.23854 0 9.99999 0C15.5228 0 20 4.47719 20 10L9.13042 10.8696Z"
        fill="#338AF3"
      />
      <path
        d="M9.13042 10C9.13042 10 2.93475 17.0725 2.92889 17.0711C4.7385 18.8807 7.23854 20 9.99999 20C15.5228 20 20 15.5228 20 10H9.13042Z"
        fill="#6DA544"
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        fill="#F0F0F0"
      />
      <path
        d="M4.04725 7.39136L4.69471 9.38417H6.79026L5.09502 10.6159L5.74245 12.6088L4.04725 11.3771L2.35198 12.6088L2.99956 10.6159L1.30432 9.38417H3.39971L4.04725 7.39136Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15425">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconDjibouti
