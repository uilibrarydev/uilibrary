import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconIndia = ({
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
    <g clipPath="url(#clip0_3366_16063)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C6.03539 0 2.60976 2.30723 0.992264 5.65219H19.0077C17.3902 2.30723 13.9646 0 10 0Z"
        fill="#FF9811"
      />
      <path
        d="M10 20.0001C13.9646 20.0001 17.3902 17.6929 19.0077 14.3479H0.992264C2.60976 17.6929 6.03539 20.0001 10 20.0001Z"
        fill="#6DA544"
      />
      <path
        d="M10 13.4782C11.921 13.4782 13.4782 11.921 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 10 6.52173C8.07902 6.52173 6.52176 8.07899 6.52176 9.99997C6.52176 11.921 8.07902 13.4782 10 13.4782Z"
        fill="#0052B4"
      />
      <path
        d="M10 12.174C11.2006 12.174 12.1739 11.2007 12.1739 10.0001C12.1739 8.79946 11.2006 7.82617 10 7.82617C8.79939 7.82617 7.8261 8.79946 7.8261 10.0001C7.8261 11.2007 8.79939 12.174 10 12.174Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 7.31738L10.6707 8.8384L12.3232 8.65867L11.3413 9.99996L12.3232 11.3412L10.6707 11.1615L10 12.6825L9.32933 11.1615L7.67683 11.3412L8.65871 9.99996L7.67683 8.65867L9.32933 8.8384L10 7.31738Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16063">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconIndia
