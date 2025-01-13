import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGuam = ({
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
    <g clipPath="url(#clip0_3366_15903)">
      <path
        d="M4.36378 18.2609C5.96863 19.358 7.90925 20.0001 10 20.0001C12.0907 20.0001 14.0313 19.358 15.6362 18.2609L10 17.3914L4.36378 18.2609Z"
        fill="#D80027"
      />
      <path
        d="M15.6362 1.73914C14.0313 0.64207 12.0907 0 10 0C7.90925 0 5.96863 0.64207 4.36378 1.73914L10 2.60871L15.6362 1.73914Z"
        fill="#D80027"
      />
      <path
        d="M20 10.0001C20 6.69113 18.0189 3.36809 15.6362 1.73926H4.36379C1.7293 3.5402 0 6.56809 0 10.0001C0 13.4323 1.7293 16.46 4.36379 18.261H15.6362C18.2707 16.46 20 13.4323 20 10.0001Z"
        fill="#0052B4"
      />
      <path
        d="M9.43411 16.3125C9.29747 16.1953 6.08696 13.4044 6.08696 10.0001C6.08696 6.59584 9.29743 3.80486 9.43411 3.68771L10 3.20264L10.5659 3.68768C10.7025 3.80486 13.9131 6.5958 13.9131 10.0001C13.9131 13.4044 10.7026 16.1954 10.5659 16.3125L10 16.7976L9.43411 16.3125Z"
        fill="#D80027"
      />
      <path
        d="M13.0435 10.0001C13.0435 6.95661 10 4.3479 10 4.3479C10 4.3479 6.95653 6.95669 6.95653 10.0001C6.95653 10.9311 7.24157 11.8213 7.63696 12.6088H12.3631C12.7584 11.8213 13.0435 10.9311 13.0435 10.0001Z"
        fill="#338AF3"
      />
      <path
        d="M13.0435 10C13.0435 10.9311 12.7584 11.8212 12.3631 12.6087L10 13.0435L7.63696 12.6087C7.24157 11.8213 6.95653 10.9311 6.95653 10H13.0435Z"
        fill="#0052B4"
      />
      <path
        d="M9.99999 15.6521C9.99999 15.6521 11.4659 14.3952 12.363 12.6086H7.63695C8.53406 14.3952 9.99999 15.6521 9.99999 15.6521Z"
        fill="#FFDA44"
      />
      <path d="M8.04347 8.26074H11.9565L10 10.2173L8.04347 8.26074Z" fill="#6DA544" />
      <path d="M9.34781 9.56519H10.6521V13.4782H9.34781V9.56519Z" fill="#A2001D" />
    </g>
    <defs>
      <clipPath id="clip0_3366_15903">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGuam
