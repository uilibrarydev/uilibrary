import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAfghanistan = ({
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
    <g clipPath="url(#clip0_3366_14376)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 10 0C8.4418 0 6.96688 0.356562 5.65219 0.992266L4.78262 10L5.65219 19.0077C6.96688 19.6434 8.4418 20 10 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        fill="#D80027"
      />
      <path
        d="M5.65219 0.992676C2.30727 2.61014 0 6.03549 0 10.0001C0 13.9646 2.30727 17.39 5.65219 19.0074V0.992676Z"
        fill="black"
      />
      <path
        d="M14.3478 0.992676V19.0074C17.6927 17.39 20 13.9646 20 10.0001C20 6.03549 17.6927 2.61014 14.3478 0.992676Z"
        fill="#496E2D"
      />
      <path
        d="M10 6.52173C8.07899 6.52173 6.52176 8.07899 6.52176 9.99997C6.52176 11.9209 8.07902 13.4782 10 13.4782C11.921 13.4782 13.4782 11.9209 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 10 6.52173ZM10 12.1739C8.79938 12.1739 7.8261 11.2006 7.8261 9.99997C7.8261 8.79938 8.79942 7.82606 10 7.82606C11.2006 7.82606 12.1739 8.79938 12.1739 9.99997C12.1739 11.2006 11.2006 12.1739 10 12.1739Z"
        fill="#FFDA44"
      />
      <path
        d="M10 8.69556C9.51973 8.69556 9.13043 9.08485 9.13043 9.56513V10.8695H10.8696V9.56513C10.8696 9.08485 10.4803 8.69556 10 8.69556Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14376">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconAfghanistan
