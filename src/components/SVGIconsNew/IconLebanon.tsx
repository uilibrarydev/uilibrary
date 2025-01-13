import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconLebanon = ({
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
    <g clipPath="url(#clip0_3366_16382)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99998 0C6.03537 0 2.60975 2.30723 0.992249 5.65219H19.0077C17.3902 2.30723 13.9646 0 9.99998 0Z"
        fill="#D80027"
      />
      <path
        d="M9.99998 20.0001C13.9646 20.0001 17.3902 17.6929 19.0077 14.3479H0.992249C2.60975 17.6929 6.03537 20.0001 9.99998 20.0001Z"
        fill="#D80027"
      />
      <path
        d="M12.6087 11.7392L10 6.95654L7.3913 11.7392H9.34782V13.0435H10.6522V11.7392H12.6087Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16382">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconLebanon
