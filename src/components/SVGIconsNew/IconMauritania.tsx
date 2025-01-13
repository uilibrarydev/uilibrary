import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMauritania = ({
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
    <g clipPath="url(#clip0_3366_14628)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#496E2D"
      />
      <path
        d="M9.99997 11.5528C8.33489 11.5528 6.94388 10.3826 6.60259 8.81986C6.55017 9.0601 6.52173 9.3092 6.52173 9.56521C6.52173 11.4863 8.07895 13.0435 9.99997 13.0435C11.921 13.0435 13.4782 11.4862 13.4782 9.56521C13.4782 9.3092 13.4498 9.0601 13.3974 8.81982C13.0561 10.3826 11.665 11.5528 9.99997 11.5528Z"
        fill="#FFDA44"
      />
      <path
        d="M9.99992 6.95654L10.3237 7.95299H11.3714L10.5238 8.56881L10.8476 9.56525L9.99992 8.94939L9.15231 9.56525L9.4761 8.56881L8.62848 7.95299H9.67617L9.99992 6.95654Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14628">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMauritania
