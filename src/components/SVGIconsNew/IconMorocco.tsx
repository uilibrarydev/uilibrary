import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMorocco = ({
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
    <g clipPath="url(#clip0_3366_14790)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M15.9097 8.20668H11.3951L10 3.91309L8.60494 8.20668H4.09033L7.74271 10.8603L6.3476 15.154L10 12.5004L13.6524 15.154L12.2573 10.8603L15.9097 8.20668ZM8.76494 10.5281L9.2367 9.07621H10.7633L11.2351 10.5281V10.5282L10 11.4255L8.76498 10.5282L8.76494 10.5281ZM10.4808 8.20668H9.51928L10 6.72699L10.4808 8.20668ZM11.9747 9.99074L11.6776 9.07625H13.2334L11.9747 9.99074ZM8.3224 9.07625L8.02525 9.99074L6.76654 9.07625H8.3224ZM8.00162 12.8774L8.4824 11.3978L9.26033 11.9629L8.00162 12.8774ZM10.7397 11.963L11.5176 11.3978L11.9984 12.8775L10.7397 11.963Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14790">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMorocco
