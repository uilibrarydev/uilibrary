import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNiger = ({
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
    <g clipPath="url(#clip0_3366_14995)">
      <path
        d="M0.992266 5.65229C0.356562 6.96697 0 8.44186 0 10.0001C0 11.5583 0.356562 13.0332 0.992266 14.3479L10 15.2175L19.0077 14.3479C19.6434 13.0332 20 11.5583 20 10.0001C20 8.44186 19.6434 6.96697 19.0077 5.65229L10 4.78271L0.992266 5.65229Z"
        fill="#F0F0F0"
      />
      <path
        d="M0.992615 14.3479C2.61004 17.6929 6.03539 20.0001 10 20.0001C13.9646 20.0001 17.39 17.6929 19.0074 14.3479H0.992615Z"
        fill="#6DA544"
      />
      <path
        d="M0.992615 5.65219H19.0074C17.39 2.30723 13.9646 0 10 0C6.03543 0 2.61004 2.30723 0.992615 5.65219Z"
        fill="#FF9811"
      />
      <path
        d="M10 13.4782C11.921 13.4782 13.4782 11.921 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 10 6.52173C8.07902 6.52173 6.52176 8.07899 6.52176 9.99997C6.52176 11.921 8.07902 13.4782 10 13.4782Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14995">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconNiger
