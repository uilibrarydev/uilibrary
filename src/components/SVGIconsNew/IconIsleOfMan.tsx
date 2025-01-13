import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconIsleOfMan = ({
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
    <g clipPath="url(#clip0_3366_16168)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M13.7026 6.70367L12.9958 9.22598L10.8751 8.83438L9.51003 6.02051L5.82225 7.32914L5.53143 6.50961L4.56659 6.39074L5.29358 8.43953L7.83143 7.79051L8.55264 9.82289L6.79827 12.412L9.7755 14.9513L9.2112 15.6129L9.59065 16.508L11.0015 14.8539L9.1705 12.9806L10.57 11.3399L13.6894 11.5646L14.3999 7.7166L15.2551 7.87453L15.8406 7.09836L13.7026 6.70367Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16168">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconIsleOfMan
