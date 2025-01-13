import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconRepublicOfTheCongo = ({
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
    <g clipPath="url(#clip0_3366_15487)">
      <path
        d="M5.42075 18.8922L12.767 12.7669L18.8923 5.42067C17.94 3.57504 16.4299 2.06415 14.585 1.1106L7.23293 7.23289L1.11072 14.5849C2.06419 16.4299 3.57509 17.9399 5.42075 18.8922Z"
        fill="#FFDA44"
      />
      <path
        d="M17.0714 17.0714C20.2263 13.9165 20.8319 9.1783 18.8896 5.41479L5.41473 18.8896C9.17824 20.832 13.9164 20.2263 17.0714 17.0714Z"
        fill="#D80027"
      />
      <path
        d="M2.92845 2.92839C-0.226464 6.0833 -0.832088 10.8215 1.11021 14.585L14.5851 1.11019C10.8216 -0.83219 6.08337 -0.226488 2.92845 2.92839Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15487">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconRepublicOfTheCongo
