import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDenmark = ({
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
    <g clipPath="url(#clip0_3366_15418)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.82615 8.69566H19.9154C19.2762 3.78914 15.0808 0 10 0C9.25334 0 8.52611 0.0825391 7.82611 0.237695V8.69566H7.82615Z"
        fill="#D80027"
      />
      <path
        d="M5.21739 8.69555V1.21582C2.47157 2.71402 0.505867 5.46211 0.0846558 8.69559H5.21739V8.69555Z"
        fill="#D80027"
      />
      <path
        d="M5.21735 11.3044H0.0846558C0.505867 14.5379 2.47157 17.286 5.21739 18.7842L5.21735 11.3044Z"
        fill="#D80027"
      />
      <path
        d="M7.82611 11.3045V19.7624C8.52611 19.9176 9.25334 20.0001 10 20.0001C15.0808 20.0001 19.2762 16.211 19.9154 11.3044H7.82611V11.3045Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15418">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconDenmark
