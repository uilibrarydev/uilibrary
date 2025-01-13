import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCameroon = ({
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
    <g clipPath="url(#clip0_3366_15056)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 9.99998 0C8.44177 0 6.96685 0.356562 5.65216 0.992266L4.78259 10L5.65216 19.0077C6.96685 19.6434 8.44177 20 9.99998 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        fill="#D80027"
      />
      <path
        d="M9.9999 6.52173L10.8632 9.17872H13.6572L11.3969 10.8211L12.2603 13.4782L9.9999 11.836L7.73955 13.4782L8.60303 10.8211L6.34271 9.17872H9.13658L9.9999 6.52173Z"
        fill="#FFDA44"
      />
      <path
        d="M5.65219 0.992676C2.30727 2.6101 0 6.03545 0 10.0001C0 13.9647 2.30727 17.39 5.65219 19.0074V0.992676Z"
        fill="#496E2D"
      />
      <path
        d="M14.3478 0.992676V19.0074C17.6928 17.39 20 13.9646 20 10.0001C20 6.03549 17.6928 2.6101 14.3478 0.992676Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15056">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCameroon
