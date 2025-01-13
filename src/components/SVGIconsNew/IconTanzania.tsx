import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTanzania = ({
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
    <g clipPath="url(#clip0_3366_16097)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FFDA44"
      />
      <path
        d="M2.92892 17.071C3.34841 17.4905 3.79599 17.8646 4.26548 18.194L18.194 4.2654C17.8647 3.79591 17.4906 3.34833 17.0711 2.92884C16.6515 2.50935 16.204 2.13528 15.7345 1.80591L1.80603 15.7345C2.13533 16.2038 2.50947 16.6515 2.92892 17.071Z"
        fill="black"
      />
      <path
        d="M2.92898 2.92896C-0.225788 6.0838 -0.831452 10.8217 1.11085 14.5851L14.5851 1.11087C10.8218 -0.83143 6.08378 -0.225727 2.92898 2.92896Z"
        fill="#6DA544"
      />
      <path
        d="M17.071 17.0712C20.2258 13.9164 20.8314 9.17844 18.8892 5.41504L5.41492 18.8893C9.17824 20.8316 13.9162 20.226 17.071 17.0712Z"
        fill="#338AF3"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16097">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconTanzania
