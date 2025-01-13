import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconEgypt = ({
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
    <g clipPath="url(#clip0_3366_15551)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99999 0C5.70034 0 2.03491 2.71375 0.621979 6.52176H19.378C17.9651 2.71375 14.2996 0 9.99999 0Z"
        fill="#D80027"
      />
      <path
        d="M9.99999 20C14.2996 20 17.9651 17.2863 19.378 13.4783H0.621979C2.03491 17.2863 5.70034 20 9.99999 20Z"
        fill="black"
      />
      <path
        d="M13.4782 8.91303H10.8695C10.8695 8.43279 10.4802 8.04346 9.99995 8.04346C9.51971 8.04346 9.13038 8.43279 9.13038 8.91303H6.52167C6.52167 9.3933 6.93999 9.7826 7.42022 9.7826H7.39124C7.39124 10.2629 7.78053 10.6522 8.26081 10.6522C8.26081 11.1324 8.6501 11.5217 9.13038 11.5217H10.8695C11.3498 11.5217 11.7391 11.1324 11.7391 10.6522C12.2194 10.6522 12.6087 10.2629 12.6087 9.7826H12.5797C13.0599 9.7826 13.4782 9.3933 13.4782 8.91303Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15551">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconEgypt
