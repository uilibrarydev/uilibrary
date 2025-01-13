import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMyanmar = ({
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
    <g clipPath="url(#clip0_3366_14802)">
      <path
        d="M19.378 13.4782C19.78 12.3949 20 11.2231 20 9.99991C20 8.77671 19.78 7.60495 19.378 6.52167L10 5.6521L0.621992 6.52167C0.220039 7.60495 0 8.77671 0 9.99991C0 11.2231 0.220039 12.3949 0.621992 13.4782L10 14.3477L19.378 13.4782Z"
        fill="#6DA544"
      />
      <path
        d="M19.378 6.52176C17.9651 2.71375 14.2997 0 10 0C5.70037 0 2.03494 2.71375 0.622009 6.52176H19.378Z"
        fill="#FFDA44"
      />
      <path
        d="M10 20C14.2997 20 17.9651 17.2863 19.378 13.4783H0.622009C2.03494 17.2863 5.70037 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M16.8574 8.46042H11.6188L10 3.47827L8.38119 8.46042H3.14264L7.38073 11.5396L5.7619 16.5218L10 13.4783L14.2381 16.5217L12.6194 11.5395L16.8574 8.46042Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14802">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMyanmar
