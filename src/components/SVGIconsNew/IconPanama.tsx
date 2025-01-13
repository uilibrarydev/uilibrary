import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPanama = ({
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
    <g clipPath="url(#clip0_3366_15206)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M0 10C0 15.5228 4.47719 20 10 20C10 16.1971 10 10 10 10C10 10 3.47824 10 0 10Z"
        fill="#0052B4"
      />
      <path
        d="M10 0C15.5228 0 20 4.47719 20 10C16.1971 10 10 10 10 10C10 10 10 3.47824 10 0Z"
        fill="#D80027"
      />
      <path
        d="M5.95269 3.47827L6.60022 5.47116H8.69565L7.00042 6.7028L7.64792 8.69569L5.95269 7.46401L4.25745 8.69569L4.90495 6.7028L3.20972 5.47116H5.30515L5.95269 3.47827Z"
        fill="#0052B4"
      />
      <path
        d="M14.0473 11.3044L14.6948 13.2973H16.7903L15.095 14.529L15.7425 16.5219L14.0473 15.2902L12.3521 16.5219L12.9996 14.529L11.3043 13.2973H13.3998L14.0473 11.3044Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15206">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconPanama
