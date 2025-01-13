import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGuyana = ({
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
    <g clipPath="url(#clip0_3366_16009)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C8.23199 0 6.57153 0.459453 5.13043 1.26453V18.7355C6.57157 19.5405 8.23199 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47719 15.5228 0 10 0Z"
        fill="#6DA544"
      />
      <path
        d="M5.15986 1.24805C4.53076 1.59668 3.94333 2.01105 3.40666 2.48215C3.46091 2.43457 3.51572 2.38754 3.57095 2.34113L11.2297 9.99996L3.57091 17.6588C3.51564 17.6124 3.46087 17.5654 3.40662 17.5178C3.9433 17.9889 4.53076 18.4032 5.15982 18.7519L20 9.99996L5.15986 1.24805Z"
        fill="#F0F0F0"
      />
      <path
        d="M4.31522 1.77271C4.01026 1.98388 3.71737 2.2111 3.43827 2.45395L9.99999 9.99997L3.43823 17.546C3.71733 17.7888 4.01022 18.0161 4.31519 18.2272L18.2882 9.99997L4.31522 1.77271Z"
        fill="#FFDA44"
      />
      <path
        d="M3.57089 2.34106C3.34858 2.52786 3.13405 2.72368 2.92889 2.9288L9.13042 9.99989L2.92889 17.071C3.13405 17.2761 3.34854 17.472 3.57089 17.6587L11.2297 9.99989L3.57089 2.34106Z"
        fill="black"
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16009">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGuyana
