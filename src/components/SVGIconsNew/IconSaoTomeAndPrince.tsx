import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSaoTomeAndPrince = ({
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
    <g clipPath="url(#clip0_3366_15617)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FFDA44"
      />
      <path
        d="M6.08696 6.52176H19.378C17.9651 2.71375 14.2996 0 10 0C7.23852 0 4.73879 1.11949 2.92926 2.92926L6.08696 6.52176Z"
        fill="#6DA544"
      />
      <path
        d="M6.08696 13.4783H19.378C17.9651 17.2863 14.2996 20 10 20C7.23852 20 4.73879 18.8805 2.92926 17.0708L6.08696 13.4783Z"
        fill="#6DA544"
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        fill="#D80027"
      />
      <path
        d="M12.6982 8.26074L13.1299 9.58934H14.5268L13.3967 10.4104L13.8284 11.739L12.6982 10.9179L11.568 11.739L11.9997 10.4104L10.8696 9.58934H12.2665L12.6982 8.26074Z"
        fill="black"
      />
      <path
        d="M17.0461 8.26074L17.4777 9.58934H18.8747L17.7446 10.4104L18.1762 11.739L17.0461 10.9179L15.9159 11.739L16.3476 10.4104L15.2174 9.58934H16.6144L17.0461 8.26074Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15617">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSaoTomeAndPrince
