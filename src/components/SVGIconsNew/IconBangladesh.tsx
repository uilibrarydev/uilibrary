import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBangladesh = ({
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
    <g clipPath="url(#clip0_3366_14671)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#496E2D"
      />
      <path
        d="M7.82608 14.3477C10.2273 14.3477 12.1739 12.4011 12.1739 9.99991C12.1739 7.59868 10.2273 5.6521 7.82608 5.6521C5.42485 5.6521 3.47827 7.59868 3.47827 9.99991C3.47827 12.4011 5.42485 14.3477 7.82608 14.3477Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14671">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBangladesh
