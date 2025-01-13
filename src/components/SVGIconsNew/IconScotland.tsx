import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconScotland = ({
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
    <g clipPath="url(#clip0_3366_15649)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M16.0882 2.06719C14.4019 0.771055 12.2912 0 10 0C7.70886 0 5.59808 0.771094 3.91187 2.06719L10 8.15531L16.0882 2.06719Z"
        fill="#0052B4"
      />
      <path
        d="M2.06715 3.91187C0.771094 5.59808 0 7.70882 0 9.99999C0 12.2912 0.771094 14.4019 2.06719 16.0882L8.15535 9.99999L2.06715 3.91187Z"
        fill="#0052B4"
      />
      <path
        d="M3.91187 17.9329C5.59812 19.229 7.70886 20 10 20C12.2912 20 14.4019 19.2289 16.0882 17.9329L10 11.8447L3.91187 17.9329Z"
        fill="#0052B4"
      />
      <path
        d="M17.9328 16.0881C19.2289 14.4019 20 12.2912 20 9.99999C20 7.70882 19.2289 5.59808 17.9328 3.91187L11.8447 9.99999L17.9328 16.0881Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15649">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconScotland
