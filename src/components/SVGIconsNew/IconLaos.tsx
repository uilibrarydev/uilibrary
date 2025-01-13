import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconLaos = ({
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
    <g clipPath="url(#clip0_3366_16371)">
      <path
        d="M19.0077 5.65219C17.3902 2.30723 13.9646 0 9.99998 0C6.03537 0 2.60975 2.30723 0.992249 5.65219L9.99998 6.52176L19.0077 5.65219Z"
        fill="#D80027"
      />
      <path
        d="M0.992249 14.3478C2.60975 17.6928 6.03537 20 9.99998 20C13.9646 20 17.3902 17.6928 19.0077 14.3478L9.99998 13.4783L0.992249 14.3478Z"
        fill="#D80027"
      />
      <path
        d="M19.0077 5.6521H0.992266C0.356562 6.96675 0 8.44167 0 9.99991C0 11.5582 0.356562 13.0331 0.992266 14.3477H19.0077C19.6435 13.0331 20 11.5582 20 9.99991C20 8.44167 19.6435 6.96675 19.0077 5.6521Z"
        fill="#0052B4"
      />
      <path
        d="M9.99997 13.4782C11.921 13.4782 13.4782 11.921 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 9.99997 6.52173C8.07899 6.52173 6.52173 8.07899 6.52173 9.99997C6.52173 11.921 8.07899 13.4782 9.99997 13.4782Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16371">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconLaos
