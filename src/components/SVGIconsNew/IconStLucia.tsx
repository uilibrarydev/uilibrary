import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconStLucia = ({
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
    <g clipPath="url(#clip0_3366_15952)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#338AF3"
      />
      <path d="M6.30432 13.4783H13.6956L9.99998 4.78271L6.30432 13.4783Z" fill="#F3F3F3" />
      <path d="M7.58868 12.6087L9.99997 7.12402L12.4113 12.6087H7.58868Z" fill="#333333" />
      <path d="M6.30432 13.4782H13.6956L9.99998 10L6.30432 13.4782Z" fill="#FFDA44" />
    </g>
    <defs>
      <clipPath id="clip0_3366_15952">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconStLucia
