import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCuracao = ({
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
    <g clipPath="url(#clip0_3366_15395)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FFDA44"
      />
      <path
        d="M10 20C13.2813 20 16.1933 18.4196 18.0168 15.9785H1.98325C3.80668 18.4196 6.71875 20 10 20Z"
        fill="#0052B4"
      />
      <path
        d="M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47719 0 10C0 11.1825 0.20582 12.3169 0.582656 13.3699H19.4173C19.7942 12.3169 20 11.1825 20 10Z"
        fill="#0052B4"
      />
      <path
        d="M6.84461 6.41357L7.38418 8.0742H9.13043L7.71774 9.10068L8.25731 10.7614L6.84461 9.73498L5.43192 10.7614L5.97156 9.10068L4.55887 8.0742H6.30504L6.84461 6.41357Z"
        fill="#F0F0F0"
      />
      <path
        d="M3.84586 4.67432L4.16961 5.67072H5.21739L4.36977 6.28658L4.69352 7.28303L3.84586 6.66717L2.99825 7.28303L3.32203 6.28658L2.47446 5.67072H3.52219L3.84586 4.67432Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15395">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCuracao
