import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBolivia = ({
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
    <g clipPath="url(#clip0_3366_14743)">
      <path
        d="M20 9.99996C20 8.77676 19.78 7.605 19.378 6.52172L10 6.08691L0.621992 6.52168C0.22 7.605 0 8.77676 0 9.99996C0 11.2232 0.22 12.3949 0.621992 13.4782L10 13.913L19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99996Z"
        fill="#FFDA44"
      />
      <path
        d="M9.99999 20C14.2996 20 17.9651 17.2863 19.378 13.4783H0.621979C2.03491 17.2863 5.70034 20 9.99999 20Z"
        fill="#6DA544"
      />
      <path
        d="M0.621979 6.52176H19.378C17.9651 2.71375 14.2996 0 9.99999 0C5.70034 0 2.03491 2.71375 0.621979 6.52176Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14743">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBolivia
