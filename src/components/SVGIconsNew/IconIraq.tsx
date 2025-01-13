import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconIraq = ({
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
    <g clipPath="url(#clip0_3366_16156)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C5.70037 0 2.03494 2.71375 0.622009 6.52176H19.3781C17.9651 2.71375 14.2997 0 10 0Z"
        fill="#A2001D"
      />
      <path
        d="M10 20C14.2997 20 17.9651 17.2863 19.378 13.4783H0.622009C2.03494 17.2863 5.70037 20 10 20Z"
        fill="black"
      />
      <path
        d="M7.60874 9.34788C7.60327 9.34788 7.59792 9.34823 7.59245 9.34831V9.34788H5.68085C5.77776 8.97343 6.11753 8.69569 6.52179 8.69569V7.39136C5.32308 7.39136 4.34788 8.36659 4.34788 9.56526V10.6305V10.6523H7.59245H7.60874C7.72862 10.6523 7.82612 10.7498 7.82612 10.8696V11.3044H3.47827V12.6087H9.13046V10.8696C9.13046 10.0305 8.4478 9.34788 7.60874 9.34788Z"
        fill="#496E2D"
      />
      <path d="M10.8696 11.3044V7.39136H9.56525V12.6088H11.7392V11.3044H10.8696Z" fill="#496E2D" />
      <path
        d="M15.2174 11.3044V7.39136H13.9131V11.3044H13.4783V10.0001H12.174V12.6088H16.087V11.3044H15.2174Z"
        fill="#496E2D"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16156">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconIraq
