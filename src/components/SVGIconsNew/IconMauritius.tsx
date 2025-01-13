import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMauritius = ({
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
    <g clipPath="url(#clip0_3366_14633)">
      <path
        d="M1.21588 5.21738L9.99998 6.08695L18.7841 5.21738C17.088 2.10895 13.7904 0 9.99998 0C6.20955 0 2.91194 2.10895 1.21588 5.21738Z"
        fill="#D80027"
      />
      <path
        d="M1.2159 14.7826L10 15.6521L18.7841 14.7826C19.5593 13.3618 20 11.7324 20 9.99994L10 9.13037L0 9.99994C0 11.7324 0.440742 13.3618 1.2159 14.7826Z"
        fill="#FFDA44"
      />
      <path
        d="M1.2159 5.21729C0.440742 6.63803 0 8.26748 0 9.9999H20C20 8.26748 19.5593 6.63803 18.7841 5.21729H10H1.2159Z"
        fill="#0052B4"
      />
      <path
        d="M9.99998 20.0001C13.7904 20.0001 17.088 17.8912 18.7841 14.7827H1.21588C2.91194 17.8912 6.20955 20.0001 9.99998 20.0001Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14633">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMauritius
