import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconRapaNui = ({
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
    <g clipPath="url(#clip0_3366_15383)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FCFCFC"
      />
      <path
        d="M13.0435 8.26074V9.13031H14.2369C13.7389 9.8225 13.0755 10.3876 12.3047 10.7681C12.107 10.5627 11.8293 10.4346 11.5217 10.4346C11.0032 10.4346 10.5697 10.7979 10.4612 11.2838C10.3092 11.2971 10.1554 11.3042 10 11.3042C9.84458 11.3042 9.69079 11.2971 9.53884 11.2838C9.43028 10.7979 8.99684 10.4346 8.47829 10.4346C8.17067 10.4346 7.89313 10.5627 7.69532 10.7681C6.92454 10.3876 6.26118 9.82246 5.76313 9.13031H6.95653V8.26074H3.91306C3.91306 11.6224 6.63833 14.3477 10 14.3477C13.3618 14.3477 16.087 11.6224 16.087 8.26074H13.0435Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15383">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconRapaNui
