import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBarbados = ({
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
    <g clipPath="url(#clip0_3366_14674)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 9.99998 0C8.44177 0 6.96685 0.356562 5.65216 0.992266L4.78259 10L5.65216 19.0077C6.96685 19.6434 8.44177 20 9.99998 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        fill="#FFDA44"
      />
      <path
        d="M5.65219 0.992676C2.30727 2.6101 0 6.03545 0 10.0001C0 13.9647 2.30727 17.39 5.65219 19.0074V0.992676Z"
        fill="#0052B4"
      />
      <path
        d="M14.3478 0.992676V19.0074C17.6927 17.39 20 13.9646 20 10.0001C20 6.03549 17.6927 2.6101 14.3478 0.992676Z"
        fill="#0052B4"
      />
      <path
        d="M13.0435 6.08686L13.6268 6.3785L13.0435 6.08686L12.4601 5.79521C12.425 5.86557 11.6633 7.41529 11.5389 9.78252H10.6522V6.08686L10 5.21729L9.34784 6.08686V9.78252H8.46116C8.33671 7.41529 7.57507 5.86557 7.53987 5.79521L6.37323 6.37854C6.38128 6.39455 7.17397 8.00803 7.17397 10.4347V11.0869H9.34788V14.7826H10.6522V11.0869H12.8261V10.4347C12.8261 9.18006 13.0432 8.14553 13.2253 7.49857C13.4239 6.79311 13.6256 6.38111 13.6276 6.37701L13.0435 6.08686Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14674">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBarbados
