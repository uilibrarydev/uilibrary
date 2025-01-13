import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconEstonia = ({
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
    <g clipPath="url(#clip0_3366_15580)">
      <path
        d="M0 9.99996C0 11.2232 0.220039 12.3949 0.621992 13.4782L10 13.913L19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99996C20 8.77676 19.78 7.60504 19.378 6.52172L10 6.08691L0.621992 6.52168C0.220039 7.60504 0 8.77676 0 9.99996H0Z"
        fill="black"
      />
      <path
        d="M10 0C5.70037 0 2.03494 2.71375 0.622009 6.52176H19.3781C17.9651 2.71375 14.2997 0 10 0Z"
        fill="#0052B4"
      />
      <path
        d="M19.378 13.4783H0.622009C2.03494 17.2862 5.70037 20 10 20C14.2997 20 17.9651 17.2862 19.378 13.4783Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15580">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconEstonia
