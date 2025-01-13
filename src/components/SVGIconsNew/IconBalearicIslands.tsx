import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBalearicIslands = ({
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
    <g clipPath="url(#clip0_3366_14590)">
      <path
        d="M10 0C15.5228 0 20 4.47718 20 9.99998C20 15.5228 15.5228 20 10 20C4.47724 20 6.10352e-05 15.5228 6.10352e-05 9.99998"
        fill="#FFDA44"
      />
      <path
        d="M9.78265 4.44439H18.3156C17.7537 3.60506 17.0681 2.85584 16.2849 2.22217H9.78265V4.44439Z"
        fill="#D80027"
      />
      <path
        d="M9.78265 8.88893H19.9383C19.8531 8.11839 19.6804 7.37436 19.4303 6.66675H9.78265V8.88893Z"
        fill="#D80027"
      />
      <path
        d="M0.569844 13.3333H19.4302C19.6803 12.6257 19.853 11.8816 19.9382 11.1111H0.0617981C0.146954 11.8817 0.319688 12.6258 0.569844 13.3333Z"
        fill="#D80027"
      />
      <path
        d="M3.71514 17.7776H16.2848C17.068 17.144 17.7537 16.3947 18.3155 15.5554H1.68448C2.24635 16.3947 2.93198 17.144 3.71514 17.7776Z"
        fill="#D80027"
      />
      <path
        d="M10 0C4.47718 0 -3.90622e-05 4.47718 2.55604e-10 10.0001C2.28226 9.99998 4.47718 10.0001 9.99998 10.0001L10 0Z"
        fill="#4A1F63"
      />
      <path
        d="M8.26087 5.21747V6.08704H7.8261V5.21747H6.95654V6.08704H6.52177V4.3479H4.78263V6.08704H4.34783V5.21747H3.4783V6.08704H3.0435V5.21747H2.17389V7.82614H9.13044V5.21747H8.26087Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14590">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBalearicIslands
