import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconParaguay = ({
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
    <g clipPath="url(#clip0_3366_15330)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C6.03543 0 2.60981 2.30723 0.99231 5.65219H19.0077C17.3903 2.30723 13.9646 0 10 0Z"
        fill="#D80027"
      />
      <path
        d="M10 20.0001C13.9646 20.0001 17.3903 17.6929 19.0078 14.3479H0.99231C2.60981 17.6929 6.03543 20.0001 10 20.0001Z"
        fill="#0052B4"
      />
      <path
        d="M12.4595 7.10571L11.5372 8.02802C11.9306 8.42142 12.174 8.96489 12.174 9.56521C12.174 10.7658 11.2007 11.7391 10.0001 11.7391C8.79951 11.7391 7.82619 10.7658 7.82619 9.56521C7.82619 8.96489 8.06955 8.42142 8.46294 8.02802L7.54064 7.10571C6.91115 7.73509 6.52185 8.60466 6.52185 9.56521C6.52185 11.4862 8.07912 13.0434 10.0001 13.0434C11.9211 13.0434 13.4783 11.4862 13.4783 9.56521C13.4783 8.60466 13.089 7.73509 12.4595 7.10571Z"
        fill="#6DA544"
      />
      <path
        d="M10 8.26074L10.3238 9.25723H11.3715L10.5239 9.87301L10.8477 10.8695L10 10.2536L9.15237 10.8695L9.47616 9.87301L8.62854 9.25723H9.67624L10 8.26074Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15330">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconParaguay
