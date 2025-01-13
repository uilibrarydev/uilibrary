import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconElSalvador = ({
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
    <g clipPath="url(#clip0_3366_15556)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C6.0354 0 2.60978 2.30723 0.992279 5.65219H19.0077C17.3902 2.30723 13.9646 0 10 0Z"
        fill="#0052B4"
      />
      <path
        d="M10 20.0001C13.9646 20.0001 17.3902 17.6929 19.0077 14.3479H0.992279C2.60978 17.6929 6.0354 20.0001 10 20.0001Z"
        fill="#0052B4"
      />
      <path d="M7.99179 10.4348L9.99999 6.95654L12.0082 10.4348H7.99179Z" fill="#FFDA44" />
      <path
        d="M12.6087 11.5833L10 12.8877L7.3913 11.5833V9.84424H12.6087V11.5833Z"
        fill="#6DA544"
      />
      <path
        d="M12.4595 7.10571L11.5372 8.02802C11.9306 8.42142 12.1739 8.96489 12.1739 9.56521C12.1739 10.7658 11.2006 11.7391 10 11.7391C8.79945 11.7391 7.82613 10.7658 7.82613 9.56521C7.82613 8.96489 8.06949 8.42142 8.46288 8.02802L7.54058 7.10571C6.91109 7.73509 6.52179 8.60466 6.52179 9.56521C6.52179 11.4862 8.07906 13.0434 10 13.0434C11.921 13.0434 13.4783 11.4862 13.4783 9.56521C13.4782 8.60466 13.0889 7.73509 12.4595 7.10571Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15556">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconElSalvador
