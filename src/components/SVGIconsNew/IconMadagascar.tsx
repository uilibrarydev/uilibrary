import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMadagascar = ({
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
    <g clipPath="url(#clip0_3366_14494)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.52173 9.99999V19.378C7.60501 19.78 8.77677 20 9.99997 20C15.5228 20 20 15.5228 20 9.99999C20 4.47718 6.52173 9.99999 6.52173 9.99999Z"
        fill="#6DA544"
      />
      <path
        d="M9.99997 0C8.77677 0 7.60501 0.220039 6.52173 0.621992V10H20C20 4.47719 15.5228 0 9.99997 0Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14494">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMadagascar
