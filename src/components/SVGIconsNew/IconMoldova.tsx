import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMoldova = ({
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
    <g clipPath="url(#clip0_3366_14747)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 10 0C8.4418 0 6.96688 0.356562 5.65219 0.992266L4.78262 10L5.65219 19.0077C6.96688 19.6434 8.4418 20 10 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        fill="#FFDA44"
      />
      <path
        d="M5.65219 0.992676C2.30727 2.61014 0 6.03549 0 10.0001C0 13.9646 2.30727 17.39 5.65219 19.0074V0.992676Z"
        fill="#0052B4"
      />
      <path
        d="M14.3478 0.992676V19.0074C17.6927 17.39 20 13.9646 20 10.0001C20 6.03549 17.6927 2.61014 14.3478 0.992676Z"
        fill="#D80027"
      />
      <path
        d="M13.4782 7.86796H11.087C11.087 7.26765 10.6003 6.78101 10 6.78101C9.39969 6.78101 8.91305 7.26765 8.91305 7.86796H6.52176C6.52176 8.45901 7.03664 8.93812 7.62762 8.93812H7.59199C7.59199 9.52921 8.07113 10.0084 8.66223 10.0084C8.66223 10.5317 9.03809 10.9666 9.53449 11.0595L8.69113 12.9635C9.09524 13.1278 9.53688 13.2191 10 13.2191C10.4631 13.2191 10.9048 13.1278 11.3088 12.9635L10.4655 11.0595C10.9619 10.9666 11.3378 10.5317 11.3378 10.0084C11.9289 10.0084 12.408 9.52921 12.408 8.93812H12.3723C12.9634 8.93812 13.4782 8.45897 13.4782 7.86796Z"
        fill="#FF9811"
      />
      <path
        d="M9.99999 9.3479L8.58694 10.0001V11.3044L9.99999 12.174L11.413 11.3044V10.0001L9.99999 9.3479Z"
        fill="#0052B4"
      />
      <path d="M8.58694 8.69556H11.413V9.99989H8.58694V8.69556Z" fill="#D80027" />
    </g>
    <defs>
      <clipPath id="clip0_3366_14747">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMoldova
