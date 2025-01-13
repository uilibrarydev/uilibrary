import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGuineaBissau = ({
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
    <g clipPath="url(#clip0_3366_15925)">
      <path
        d="M10 0C9.09742 0 8.22305 0.120313 7.39129 0.344492L6.52176 10L7.39133 19.6555C8.22305 19.8797 9.09742 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47719 15.5228 0 10 0Z"
        fill="#FFDA44"
      />
      <path
        d="M6.52176 10L7.39133 19.6555C8.22305 19.8797 9.09742 20 10 20C15.5228 20 20 15.5228 20 10H6.52176Z"
        fill="#6DA544"
      />
      <path
        d="M0 9.99992C0 13.7904 2.10898 17.088 5.21738 18.784V1.21582C2.10898 2.91184 0 6.20949 0 9.99992Z"
        fill="#D80027"
      />
      <path
        d="M0 9.99999C0 14.6203 3.13363 18.508 7.39129 19.6555V0.344482C3.13363 1.49198 0 5.37972 0 9.99999Z"
        fill="#D80027"
      />
      <path
        d="M3.77876 7.39136L4.42622 9.38417H6.52177L4.82653 10.6159L5.47395 12.6088L3.77876 11.3771L2.08348 12.6088L2.73106 10.6159L1.03583 9.38417H3.13126L3.77876 7.39136Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15925">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGuineaBissau
