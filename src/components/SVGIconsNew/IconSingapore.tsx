import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSingapore = ({
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
    <g clipPath="url(#clip0_3366_15682)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10" fill="#D80027" />
      <path
        d="M6.08697 5.21727C6.08697 3.76031 7.11091 2.5432 8.47826 2.24457C8.2681 2.19871 8.05009 2.17383 7.82607 2.17383C6.14517 2.17383 4.78259 3.53641 4.78259 5.2173C4.78259 6.8982 6.14517 8.26078 7.82607 8.26078C8.05001 8.26078 8.26806 8.2359 8.47826 8.19C7.11091 7.89137 6.08697 6.67426 6.08697 5.21727Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99999 2.39111L10.2158 3.05537H10.9143L10.3492 3.46596L10.5651 4.13022L9.99999 3.71971L9.43491 4.13022L9.65077 3.46596L9.08569 3.05537H9.78413L9.99999 2.39111Z"
        fill="#F0F0F0"
      />
      <path
        d="M8.30573 3.69556L8.52155 4.35985H9.22003L8.65495 4.7704L8.87081 5.43466L8.30573 5.02415L7.74058 5.43466L7.95648 4.7704L7.39136 4.35985H8.08983L8.30573 3.69556Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.6944 3.69556L11.9103 4.35985H12.6088L12.0437 4.7704L12.2596 5.43466L11.6944 5.02415L11.1294 5.43466L11.3452 4.7704L10.7802 4.35985H11.4786L11.6944 3.69556Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.0422 5.6521L11.2581 6.3164H11.9565L11.3914 6.72694L11.6073 7.3912L11.0422 6.98069L10.4771 7.3912L10.693 6.72694L10.1279 6.3164H10.8263L11.0422 5.6521Z"
        fill="#F0F0F0"
      />
      <path
        d="M8.95779 5.6521L9.17361 6.3164H9.87213L9.30701 6.72694L9.52291 7.3912L8.95779 6.98069L8.39268 7.3912L8.60854 6.72694L8.04346 6.3164H8.74193L8.95779 5.6521Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15682">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSingapore
