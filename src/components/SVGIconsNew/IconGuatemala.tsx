import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGuatemala = ({
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
    <g clipPath="url(#clip0_3366_15914)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M20 9.99992C20 6.03531 17.6928 2.60969 14.3478 0.992188V19.0076C17.6928 17.3902 20 13.9645 20 9.99992Z"
        fill="#338AF3"
      />
      <path
        d="M0 9.99992C0 13.9645 2.30723 17.3902 5.65219 19.0077V0.992188C2.30723 2.60969 0 6.03531 0 9.99992Z"
        fill="#338AF3"
      />
      <path
        d="M12.6132 11.691L10.9224 10.0001L12.5318 8.39053L12.4589 7.54045L11.9981 7.07959L10 9.07772L8.00188 7.07959L7.5411 7.54045L7.46817 8.39053L9.07766 10.0001L7.38676 11.691L8.30911 12.6132L10 10.9224L11.6909 12.6132L12.6132 11.691Z"
        fill="#ACABB1"
      />
      <path
        d="M12.4595 7.54053L11.5372 8.46283C11.9306 8.85623 12.1739 9.39971 12.1739 10C12.1739 11.2006 11.2006 12.1739 10 12.1739C8.79945 12.1739 7.8261 11.2006 7.8261 10C7.8261 9.39971 8.06945 8.85623 8.46285 8.46283L7.54055 7.54053C6.91106 8.1699 6.52176 9.03947 6.52176 10C6.52176 11.921 8.07902 13.4783 10 13.4783C11.921 13.4783 13.4782 11.921 13.4782 10C13.4782 9.03951 13.0889 8.16994 12.4595 7.54053Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15914">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGuatemala
