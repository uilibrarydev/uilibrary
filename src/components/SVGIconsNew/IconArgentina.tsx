import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArgentina = ({
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
    <g clipPath="url(#clip0_3366_14521)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C6.03543 0 2.60981 2.30723 0.99231 5.65219H19.0077C17.3903 2.30723 13.9646 0 10 0Z"
        fill="#338AF3"
      />
      <path
        d="M10 20.0001C13.9646 20.0001 17.3903 17.6929 19.0078 14.3479H0.99231C2.60981 17.6929 6.03543 20.0001 10 20.0001Z"
        fill="#338AF3"
      />
      <path
        d="M12.9888 9.99998L11.7676 10.5745L12.4179 11.7572L11.0917 11.5035L10.9237 12.8432L9.99998 11.8579L9.07623 12.8432L8.90822 11.5035L7.58205 11.7572L8.23236 10.5744L7.01111 9.99998L8.2324 9.42549L7.58205 8.24275L8.90818 8.49643L9.07626 7.15674L9.99998 8.14205L10.9237 7.15674L11.0917 8.49643L12.4179 8.24275L11.7676 9.42553L12.9888 9.99998Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14521">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconArgentina
