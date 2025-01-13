import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCentralAfricanRepublic = ({
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
    <g clipPath="url(#clip0_3366_15107)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M18.7841 5.21743C17.4919 2.84911 15.2699 1.06126 12.6087 0.343994L12.174 5.21743H18.7841Z"
        fill="#0052B4"
      />
      <path
        d="M1.21588 5.21743H7.82604L7.39127 0.343994C4.73006 1.06126 2.50811 2.84915 1.21588 5.21743Z"
        fill="#0052B4"
      />
      <path
        d="M12.174 10V14.7826H18.7841C19.5593 13.3619 20 11.7324 20 10H12.174Z"
        fill="#6DA544"
      />
      <path
        d="M7.82609 10H0C0 11.7324 0.440742 13.3619 1.2159 14.7826H7.82605V10H7.82609Z"
        fill="#6DA544"
      />
      <path
        d="M1.21588 14.7827C2.50811 17.151 4.73006 18.9389 7.39127 19.6562L7.82604 15.3941L1.21588 14.7827Z"
        fill="#FFDA44"
      />
      <path
        d="M12.6087 19.6562C15.2699 18.9389 17.4919 17.151 18.7841 14.7827L12.174 15.394L12.6087 19.6562Z"
        fill="#FFDA44"
      />
      <path d="M12.1738 15.394L18.784 14.7827H12.1738V15.394Z" fill="#FFDA44" />
      <path d="M7.82608 14.7827H1.21588L7.82608 15.394V14.7827Z" fill="#FFDA44" />
      <path
        d="M10 0C9.09739 0 8.22309 0.120313 7.3913 0.344492V19.6555C8.22309 19.8797 9.09739 20 10 20C10.9026 20 11.7769 19.8797 12.6087 19.6555V0.344492C11.7769 0.120313 10.9026 0 10 0V0Z"
        fill="#D80027"
      />
      <path
        d="M5.37884 2.17383L5.6486 3.00418H6.52176L5.81544 3.51738L6.08524 4.34773L5.37884 3.83457L4.67247 4.34773L4.94235 3.51738L4.23602 3.00418H5.10911L5.37884 2.17383Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15107">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCentralAfricanRepublic
