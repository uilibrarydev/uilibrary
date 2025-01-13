import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBahamas = ({
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
    <g clipPath="url(#clip0_3366_14581)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FFDA44"
      />
      <path
        d="M6.08696 6.52176H19.378C17.9651 2.71375 14.2996 0 10 0C7.23852 0 4.73879 1.11949 2.92926 2.92926L6.08696 6.52176Z"
        fill="#338AF3"
      />
      <path
        d="M6.08696 13.4783H19.378C17.9651 17.2863 14.2996 20 10 20C7.23852 20 4.73879 18.8805 2.92926 17.0708L6.08696 13.4783Z"
        fill="#338AF3"
      />
      <path
        d="M2.9289 2.92896C-0.976339 6.83419 -0.976339 13.1659 2.9289 17.0711C4.54268 15.4574 6.09475 13.9053 9.99999 10L2.9289 2.92896Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14581">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBahamas
