import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNauru = ({
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
    <g clipPath="url(#clip0_3366_14952)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#0052B4"
      />
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FFDA44"
      />
      <path
        d="M10 0C4.77016 0 0.478828 4.01488 0.0380859 9.13043H19.962C19.5212 4.01488 15.2298 0 10 0Z"
        fill="#0052B4"
      />
      <path
        d="M10 20.0001C15.2298 20.0001 19.5212 15.9852 19.962 10.8696H0.0380859C0.478828 15.9852 4.77016 20.0001 10 20.0001Z"
        fill="#0052B4"
      />
      <path
        d="M8.26089 13.4783L7.14035 14.0054L7.73703 15.0906L6.52027 14.8578L6.36609 16.087L5.51855 15.183L4.67105 16.087L4.51687 14.8578L3.30007 15.0906L3.89679 14.0054L2.77625 13.4783L3.89683 12.9512L3.30007 11.8661L4.51683 12.0988L4.67109 10.8696L5.51855 11.7737L6.36613 10.8696L6.52027 12.0988L7.73707 11.8661L7.14039 12.9513L8.26089 13.4783Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14952">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconNauru
