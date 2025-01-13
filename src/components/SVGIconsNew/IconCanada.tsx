import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCanada = ({
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
    <g clipPath="url(#clip0_3366_15061)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M20 9.99992C20 6.03531 17.6928 2.60969 14.3478 0.992188V19.0076C17.6928 17.3902 20 13.9645 20 9.99992Z"
        fill="#D80027"
      />
      <path
        d="M0 9.99992C0 13.9645 2.30723 17.3902 5.65219 19.0077V0.992188C2.30723 2.60969 0 6.03531 0 9.99992Z"
        fill="#D80027"
      />
      <path
        d="M11.7391 11.3044L13.4782 10.4348L12.6087 10V9.13045L10.8695 10L11.7391 8.26088H10.8695L9.99997 6.95654L9.1304 8.26088H8.26083L9.1304 10L7.39126 9.13045V10L6.52173 10.4348L8.26083 11.3044L7.82606 12.1739H9.5652V13.4783H10.4347V12.1739H12.1739L11.7391 11.3044Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15061">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCanada
