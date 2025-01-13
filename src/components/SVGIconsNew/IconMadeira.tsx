import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMadeira = ({
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
    <g clipPath="url(#clip0_3366_14498)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 9.99998 0C8.44173 0 6.96685 0.356562 5.65216 0.992266L4.78259 10L5.65216 19.0077C6.96685 19.6434 8.44173 20 9.99998 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        fill="#FFDA44"
      />
      <path
        d="M5.65219 0.992676C2.30723 2.61014 0 6.03549 0 10.0001C0 13.9646 2.30723 17.39 5.65219 19.0074V0.992676Z"
        fill="#0052B4"
      />
      <path
        d="M14.3478 0.992676V19.0074C17.6928 17.39 20 13.9646 20 10.0001C20 6.03549 17.6928 2.61014 14.3478 0.992676Z"
        fill="#0052B4"
      />
      <path
        d="M12.8261 10.8695L13.4782 11.7391V8.26083L12.8261 9.1304H10.8695V7.17388L11.7391 6.52173H8.26083L9.1304 7.17388V9.1304H7.17388L6.52173 8.26083V11.7391L7.17388 10.8695H9.1304V12.8261L8.26083 13.4782H11.7391L10.8695 12.8261V10.8695H12.8261Z"
        fill="#D80027"
      />
      <path
        d="M12.6087 9.5653H10.4348V7.39136H9.56524V9.5653H7.3913V10.4348H9.56524V12.6088H10.4348V10.4348H12.6087V9.5653Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14498">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMadeira
