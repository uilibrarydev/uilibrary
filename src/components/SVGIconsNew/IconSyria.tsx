import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSyria = ({
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
    <g clipPath="url(#clip0_3366_16002)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C5.70037 0 2.03494 2.71375 0.622009 6.52176H19.3781C17.9651 2.71375 14.2997 0 10 0Z"
        fill="#D80027"
      />
      <path
        d="M10 20C14.2997 20 17.9651 17.2863 19.378 13.4783H0.622009C2.03494 17.2863 5.70037 20 10 20Z"
        fill="black"
      />
      <path
        d="M5.97505 7.60864L6.51462 9.26927H8.26083L6.84814 10.2958L7.38775 11.9565L5.97505 10.9301L4.56236 11.9565L5.10197 10.2958L3.68927 9.26927H5.43548L5.97505 7.60864Z"
        fill="#6DA544"
      />
      <path
        d="M14.0249 7.60864L14.5645 9.26927H16.3107L14.898 10.2958L15.4376 11.9565L14.0249 10.9301L12.6122 11.9565L13.1518 10.2958L11.7391 9.26927H13.4853L14.0249 7.60864Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16002">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSyria
