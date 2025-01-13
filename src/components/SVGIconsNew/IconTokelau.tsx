import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTokelau = ({
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
    <g clipPath="url(#clip0_3366_16132)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FFDA44"
      />
      <path
        d="M16.087 4.78262C15.9973 5.21367 15.9565 5.67277 15.9565 6.13043C15.9565 8.76848 17.5291 11.0517 19.7829 12.0796C19.9248 11.4086 20 10.7131 20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47719 0 10C0 15.5228 4.47719 20 10 20C13.4251 20 16.4476 18.2777 18.2498 15.6522H5.65219V14.3479H19.0077C19.1444 14.0652 19.2679 13.775 19.378 13.4783H5.65219L16.087 4.78262Z"
        fill="#0052B4"
      />
      <path
        d="M7.34659 5.21729L7.56245 5.88158H8.26088L7.69585 6.29217L7.9117 6.95643L7.34659 6.54592L6.78155 6.95643L6.99737 6.29217L6.43225 5.88158H7.13073L7.34659 5.21729Z"
        fill="#F0F0F0"
      />
      <path
        d="M4.50931 10L4.77915 10.8304H5.6522L4.94583 11.3435L5.21567 12.1739L4.50931 11.6607L3.80298 12.1739L4.07278 11.3435L3.36646 10.8304H4.2395L4.50931 10Z"
        fill="#F0F0F0"
      />
      <path
        d="M4.50931 3.04346L4.77915 3.87389H5.6522L4.94583 4.38697L5.21567 5.21736L4.50931 4.70416L3.80298 5.21736L4.07278 4.38697L3.36646 3.87389H4.2395L4.50931 3.04346Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.33542 6.95654L2.60526 7.78697H3.47827L2.77194 8.30006L3.04178 9.13045L2.33542 8.61725L1.62909 9.13045L1.89889 8.30006L1.19257 7.78697H2.06557L2.33542 6.95654Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16132">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconTokelau
