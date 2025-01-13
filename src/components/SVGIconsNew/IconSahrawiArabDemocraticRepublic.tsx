import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSahrawiArabDemocraticRepublic = ({
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
    <g clipPath="url(#clip0_3366_15513)">
      <path
        d="M0.992266 5.65229C0.356562 6.96697 0 8.44186 0 10.0001C0 11.5583 0.356562 13.0332 0.992266 14.3479L10 15.2175L19.0077 14.3479C19.6434 13.0332 20 11.5583 20 10.0001C20 8.44186 19.6434 6.96697 19.0077 5.65229L10 4.78271L0.992266 5.65229Z"
        fill="#F0F0F0"
      />
      <path
        d="M0.992676 14.3479C2.6101 17.6929 6.03549 20.0001 10.0001 20.0001C13.9646 20.0001 17.39 17.6929 19.0074 14.3479H0.992676Z"
        fill="#496E2D"
      />
      <path
        d="M0.992676 5.65219H19.0074C17.39 2.30723 13.9647 0 10.0001 0C6.03545 0 2.6101 2.30723 0.992676 5.65219Z"
        fill="black"
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        fill="#D80027"
      />
      <path
        d="M12.6087 10C12.6087 8.54307 13.6326 7.32592 15 7.02732C14.7898 6.98143 14.5718 6.95654 14.3478 6.95654C12.6669 6.95654 11.3043 8.31912 11.3043 10C11.3043 11.6809 12.6669 13.0435 14.3478 13.0435C14.5717 13.0435 14.7898 13.0186 15 12.9727C13.6326 12.6741 12.6087 11.457 12.6087 10Z"
        fill="#D80027"
      />
      <path
        d="M15.1279 8.04346L15.5597 9.37213H16.9566L15.8264 10.1931L16.2581 11.5217L15.1279 10.7006L13.9978 11.5217L14.4296 10.1931L13.2993 9.37213H14.6962L15.1279 8.04346Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15513">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSahrawiArabDemocraticRepublic
