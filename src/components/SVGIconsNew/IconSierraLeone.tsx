import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSierraLeone = ({
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
    <g clipPath="url(#clip0_3366_15678)">
      <path
        d="M19.378 13.4782C19.78 12.3948 20 11.2231 20 9.99991C20 8.77671 19.78 7.60499 19.378 6.52167L10 5.6521L0.621992 6.52167C0.22 7.60499 0 8.77671 0 9.99991C0 11.2231 0.22 12.3948 0.621992 13.4782L10 14.3477L19.378 13.4782Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99999 20C14.2996 20 17.9651 17.2863 19.378 13.4783H0.621948C2.03492 17.2863 5.70031 20 9.99999 20Z"
        fill="#338AF3"
      />
      <path
        d="M10 0C5.70031 0 2.03492 2.71375 0.621948 6.52176H19.378C17.9651 2.71375 14.2996 0 10 0Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15678">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSierraLeone
