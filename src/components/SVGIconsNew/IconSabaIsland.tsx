import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSabaIsland = ({
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
    <g clipPath="url(#clip0_3366_15504)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 3.70451e-06C9.99066 -0.00702755 -0.00265572 9.99739 5.29435e-07 10C5.29435e-07 4.47719 4.47719 3.70451e-06 10 3.70451e-06Z"
        fill="#D80027"
      />
      <path
        d="M10 3.70453e-06C10.0093 -0.00702755 20.0027 9.99735 20 10C20 4.47719 15.5228 3.70453e-06 10 3.70453e-06Z"
        fill="#D80027"
      />
      <path
        d="M10 20C9.99066 20.007 -0.00265572 10.0027 5.29435e-07 10C5.29435e-07 15.5228 4.47719 20 10 20Z"
        fill="#0052B4"
      />
      <path
        d="M10 20C10.0093 20.007 20.0027 10.0027 20 10C20 15.5228 15.5228 20 10 20Z"
        fill="#0052B4"
      />
      <path
        d="M10 5.21729L11.0792 8.53873H14.5716L11.7462 10.5915L12.8254 13.9129L10 11.8602L7.17464 13.9129L8.25386 10.5915L5.42847 8.53873H8.92081L10 5.21729Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15504">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSabaIsland
