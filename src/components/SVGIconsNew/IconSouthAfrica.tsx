import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSouthAfrica = ({
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
    <g clipPath="url(#clip0_3366_15815)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.92893 17.0711C-0.976309 13.1659 -0.976309 6.83423 2.92893 2.92896C2.92865 2.92938 8.69568 10 8.69568 10L2.92893 17.0711Z"
        fill="black"
      />
      <path
        d="M8.69567 9.99998L1.32629 5.02002C1.09781 5.41717 0.896331 5.8317 0.723206 6.26076L4.45403 10L0.723323 13.7395C0.896292 14.1682 1.09758 14.5825 1.3259 14.9794L8.69567 9.99998Z"
        fill="#FFDA44"
      />
      <path
        d="M19.9154 8.69556H8.69542L2.92886 2.92896C2.30745 3.55036 1.76757 4.25313 1.32632 5.01997L6.29659 9.99989L1.32593 14.9792C1.76718 15.7462 2.30729 16.4492 2.92886 17.0708L8.69542 11.3042H19.9154C19.971 10.8773 20 10.442 20 9.99989C20 9.55782 19.971 9.12251 19.9154 8.69556Z"
        fill="#6DA544"
      />
      <path
        d="M3.91162 17.9326C5.59791 19.2288 7.70873 19.9999 9.99998 19.9999C14.6203 19.9999 18.508 16.8663 19.6555 12.6086H9.23564L3.91162 17.9326Z"
        fill="#0052B4"
      />
      <path
        d="M19.6555 7.39129C18.508 3.13363 14.6203 0 9.99998 0C7.70873 0 5.59791 0.771133 3.91162 2.0673L9.23561 7.39129H19.6555Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15815">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSouthAfrica
