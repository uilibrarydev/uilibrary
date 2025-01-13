import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconKuwait = ({
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
    <g clipPath="url(#clip0_3366_16357)">
      <path
        d="M19.378 13.4782C19.78 12.3948 20 11.2231 20 9.99991C20 8.77671 19.78 7.60499 19.378 6.52167L10 5.6521L0.621992 6.52167C0.220039 7.60499 0 8.77671 0 9.99991C0 11.2231 0.220039 12.3948 0.621992 13.4782L10 14.3477L19.378 13.4782Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99999 20C14.2996 20 17.9651 17.2863 19.378 13.4783H0.621948C2.03492 17.2863 5.70031 20 9.99999 20Z"
        fill="#D80027"
      />
      <path
        d="M10 0C5.70031 0 2.03492 2.71375 0.621948 6.52176H19.378C17.9651 2.71375 14.2996 0 10 0Z"
        fill="#6DA544"
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C3.94826 16.0518 4.94318 15.0569 6.52174 13.4783V6.52181L2.92893 2.92896Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16357">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconKuwait
