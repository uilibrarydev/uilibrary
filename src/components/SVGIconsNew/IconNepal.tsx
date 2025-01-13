import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNepal = ({
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
    <g clipPath="url(#clip0_3366_14959)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path d="M19.9413 11.087L19.9411 11.0867L19.941 11.087H19.9413Z" fill="#0052B4" />
      <path
        d="M19.941 11.087C19.941 11.0869 19.9411 11.0868 19.9411 11.0867L8.97445 0.052002C8.47973 0.102432 7.99562 0.188916 7.52488 0.308799C3.19914 1.41017 0 10 0 10C0 10 13.9999 19.3686 15.5971 18.2877C15.9166 18.0714 16.223 17.8372 16.5148 17.5864L10.0154 11.087H19.941Z"
        fill="#0052B4"
      />
      <path
        d="M17.3913 10.0001L7.66582 0.274658C3.26906 1.3261 0 5.28103 0 10.0001C0 15.5229 4.47719 20.0001 10 20.0001C12.0949 20.0001 14.0389 19.3555 15.6457 18.2544L7.39129 10.0001H17.3913Z"
        fill="#D80027"
      />
      <path
        d="M9.51063 14.7654L8.28934 14.1909L8.93969 13.0082L7.61352 13.2619L7.44547 11.9221L6.52176 12.9075L5.59805 11.9221L5.42996 13.2619L4.10383 13.0081L4.75418 14.1909L3.53285 14.7654L4.75418 15.3398L4.10383 16.5226L5.43004 16.269L5.59801 17.6086L6.52176 16.6233L7.44547 17.6086L7.61352 16.269L8.93965 16.5227L8.2893 15.3399L9.51063 14.7654Z"
        fill="#F0F0F0"
      />
      <path
        d="M8.69566 5.54624L7.80738 5.12847L8.28039 4.26819L7.31582 4.45272L7.19359 3.47827L6.52175 4.19495L5.84992 3.47827L5.72765 4.45272L4.76308 4.26819L5.23613 5.12847L4.34781 5.54624L6.52175 5.98108L8.69566 5.54624Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.13043 5.54614C9.13043 6.98688 7.96246 8.15485 6.52172 8.15485C5.08098 8.15485 3.91301 6.98688 3.91301 5.54614"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14959">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconNepal
