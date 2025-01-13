import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconHungary = ({
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
    <g clipPath="url(#clip0_3366_16051)">
      <path
        d="M0.621992 6.52167C0.220039 7.60503 0 8.77671 0 9.99991C0 11.2231 0.220039 12.3949 0.621992 13.4782L10 14.3477L19.378 13.4782C19.78 12.3949 20 11.2231 20 9.99991C20 8.77671 19.78 7.60503 19.378 6.52167L10 5.6521L0.621992 6.52167Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C5.70043 0 2.03496 2.71375 0.62207 6.52176H19.3781C17.9651 2.71375 14.2997 0 10 0Z"
        fill="#D80027"
      />
      <path
        d="M10 20C14.2997 20 17.9651 17.2863 19.3781 13.4783H0.62207C2.03496 17.2863 5.70043 20 10 20Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16051">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconHungary
