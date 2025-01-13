import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconOman = ({
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
    <g clipPath="url(#clip0_3366_15170)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M0 9.99992C0 13.7904 2.10898 17.088 5.21738 18.784V1.21582C2.10898 2.91184 0 6.20949 0 9.99992Z"
        fill="#D80027"
      />
      <path
        d="M19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60501 19.378 6.52173H0.622031C0.220039 7.60501 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.622031 13.4782L10 14.3478L19.378 13.4782Z"
        fill="#D80027"
      />
      <path
        d="M9.99999 20C14.2997 20 17.9651 17.2863 19.378 13.4783H0.622025C2.03491 17.2863 5.70038 20 9.99999 20Z"
        fill="#6DA544"
      />
      <path
        d="M0 9.99999C0 14.6203 3.13363 18.508 7.39129 19.6555V0.344482C3.13363 1.49198 0 5.37972 0 9.99999Z"
        fill="#D80027"
      />
      <path
        d="M6.11785 4.40058L5.19554 3.47827L4.5807 4.09319L3.96586 3.47827L3.04355 4.40058L3.65843 5.01546L3.04347 5.63038L3.96578 6.55269L4.58066 5.93776L5.19554 6.55269L6.11785 5.63038L5.50296 5.01546L6.11785 4.40058Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15170">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconOman
