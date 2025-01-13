import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNicaragua = ({
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
    <g clipPath="url(#clip0_3366_14986)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C6.0354 0 2.60978 2.30723 0.992279 5.65219H19.0077C17.3902 2.30723 13.9646 0 10 0Z"
        fill="#338AF3"
      />
      <path
        d="M10 20.0001C13.9646 20.0001 17.3902 17.6929 19.0077 14.3479H0.992279C2.60978 17.6929 6.0354 20.0001 10 20.0001Z"
        fill="#338AF3"
      />
      <path
        d="M9.99999 6.95654C8.31913 6.95654 6.95651 8.31916 6.95651 10C6.95651 11.6809 8.31913 13.0435 9.99999 13.0435C11.6808 13.0435 13.0435 11.6809 13.0435 10C13.0435 8.31916 11.6808 6.95654 9.99999 6.95654ZM9.99999 11.7392C9.03952 11.7392 8.26085 10.9606 8.26085 10C8.26085 9.03947 9.03948 8.26088 9.99999 8.26088C10.9605 8.26088 11.7391 9.03947 11.7391 10C11.7391 10.9606 10.9605 11.7392 9.99999 11.7392Z"
        fill="#FFDA44"
      />
      <path
        d="M11.5062 10.4348L9.99999 10L8.49382 10.4348L7.99179 11.3043H12.0082L11.5062 10.4348Z"
        fill="#0052B4"
      />
      <path d="M10 7.82617L8.99591 9.56531L10 10.0001L11.0041 9.56531L10 7.82617Z" fill="#338AF3" />
      <path d="M8.49384 10.4347H11.5062L11.0041 9.56519H8.99591L8.49384 10.4347Z" fill="#6DA544" />
    </g>
    <defs>
      <clipPath id="clip0_3366_14986">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconNicaragua
