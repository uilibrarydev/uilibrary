import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPortugal = ({
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
    <g clipPath="url(#clip0_3366_15366)">
      <path
        d="M0 10.0001C0 14.2997 2.71375 17.9651 6.52168 19.378L7.39129 10L6.52168 0.62207C2.71375 2.03504 0 5.70043 0 10.0001Z"
        fill="#6DA544"
      />
      <path
        d="M20 10C20 4.47719 15.5228 0 10 0C8.7768 0 7.60504 0.220039 6.52168 0.621992V19.378C7.60504 19.78 8.7768 20 10 20C15.5228 20 20 15.5228 20 10Z"
        fill="#D80027"
      />
      <path
        d="M6.52176 13.4782C8.44274 13.4782 10 11.921 10 9.99997C10 8.07899 8.44274 6.52173 6.52176 6.52173C4.60078 6.52173 3.04352 8.07899 3.04352 9.99997C3.04352 11.921 4.60078 13.4782 6.52176 13.4782Z"
        fill="#FFDA44"
      />
      <path
        d="M4.56523 8.26074V10.4346C4.56523 11.5152 5.44117 12.3912 6.52175 12.3912C7.60234 12.3912 8.47828 11.5152 8.47828 10.4346V8.26074H4.56523Z"
        fill="#D80027"
      />
      <path
        d="M6.52176 11.0869C6.16215 11.0869 5.86957 10.7943 5.86957 10.4347V9.56519H7.1739V10.4348C7.1739 10.7943 6.88133 11.0869 6.52176 11.0869Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15366">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconPortugal
