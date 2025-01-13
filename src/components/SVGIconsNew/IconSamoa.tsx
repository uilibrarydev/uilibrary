import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSamoa = ({
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
    <g clipPath="url(#clip0_3366_15527)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C3.43477 6.56523 6.34781 3.65219 10 0C15.5228 0 20 4.47719 20 10Z"
        fill="#D80027"
      />
      <path d="M10 10C10 4.47719 10 3.82609 10 0C4.47719 0 0 4.47719 0 10H10Z" fill="#0052B4" />
      <path
        d="M8.00993 6.52173L8.17184 7.01997H8.69567L8.27184 7.32782L8.43376 7.82606L8.00993 7.51813L7.5861 7.82606L7.74802 7.32782L7.32419 7.01997H7.84802L8.00993 6.52173Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.37884 2.60864L5.64864 3.43907H6.52177L5.81536 3.95216L6.08524 4.78255L5.37884 4.26931L4.67247 4.78255L4.94231 3.95216L4.23595 3.43907H5.10899L5.37884 2.60864Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.98754 3.47827L8.25735 4.30874H9.13043L8.42406 4.82183L8.69387 5.65222L7.98754 5.13898L7.28117 5.65222L7.55102 4.82183L6.84465 4.30874H7.7177L7.98754 3.47827Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.92551 6.95654L6.19536 7.78697H7.0684L6.36204 8.30006L6.63188 9.13045L5.92551 8.61725L5.21915 9.13045L5.48899 8.30006L4.78262 7.78697H5.65571L5.92551 6.95654Z"
        fill="#F0F0F0"
      />
      <path
        d="M3.63969 4.78247L3.90954 5.6129H4.78262L4.07622 6.12599L4.34606 6.95638L3.63969 6.44317L2.93337 6.95638L3.20317 6.12599L2.49684 5.6129H3.36989L3.63969 4.78247Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15527">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSamoa
