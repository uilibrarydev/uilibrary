import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMozambique = ({
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
    <g clipPath="url(#clip0_3366_14793)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.40512 13.9131L2.92926 17.0708C4.73879 18.8805 7.23852 20 10 20C14.134 20 17.6814 17.4911 19.2043 13.9131H5.40512Z"
        fill="#FFDA44"
      />
      <path
        d="M19.2199 6.12316C17.7055 2.52586 14.148 0 10 0C7.23852 0 4.73879 1.11949 2.92926 2.92926L5.43356 6.12316H19.2199Z"
        fill="#496E2D"
      />
      <path
        d="M2.17389 7.35498V12.6086H19.6555C19.8798 11.7769 20 10.9025 20 9.9999C20 9.0842 19.8766 8.19748 19.646 7.35498H2.17389Z"
        fill="black"
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        fill="#A2001D"
      />
      <path
        d="M4.04725 7.39136L4.69471 9.38417H6.79026L5.09502 10.6159L5.74245 12.6088L4.04725 11.3771L2.35198 12.6088L2.99956 10.6159L1.30432 9.38417H3.39971L4.04725 7.39136Z"
        fill="#FFDA44"
      />
      <path d="M2.15259 10H5.94259V11.7391H2.15259V10Z" fill="#F0F0F0" />
      <path
        d="M6.66015 8.00628L6.04527 7.39136L4.0473 9.38933L2.04933 7.39136L1.43445 8.00628L3.43417 10.0025L1.43445 12.0022L2.04933 12.6088L4.0473 10.6144L6.04527 12.6088L6.66015 12.0022L4.66042 10.0025L6.66015 8.00628Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14793">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMozambique
