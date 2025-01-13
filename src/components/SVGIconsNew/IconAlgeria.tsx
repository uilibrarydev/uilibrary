import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAlgeria = ({
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
    <g clipPath="url(#clip0_3366_14394)">
      <path
        d="M10 0C15.5228 0 20 4.47719 20 10C20 15.5228 15.5228 20 10 20C10 19.5652 8.69568 10 8.69568 10L10 0Z"
        fill="#F0F0F0"
      />
      <path d="M10 20C4.47719 20 0 15.5228 0 10C0 4.47719 4.47719 0 10 0" fill="#496E2D" />
      <path
        d="M12.1486 8.08179L11.3281 9.21245L9.9993 8.78151L10.8211 9.9112L10.0007 11.0419L11.329 10.6094L12.1508 11.7391L12.1499 10.3421L13.4782 9.90964L12.1495 9.47878L12.1486 8.08179Z"
        fill="#D80027"
      />
      <path
        d="M10.8296 12.8261C9.26879 12.8261 8.00348 11.5608 8.00348 10C8.00348 8.43923 9.26879 7.17392 10.8296 7.17392C11.3162 7.17392 11.7741 7.29696 12.1739 7.5136C11.5467 6.90028 10.6891 6.52173 9.74262 6.52173C7.8216 6.52173 6.26437 8.07899 6.26437 9.99997C6.26437 11.9209 7.82164 13.4782 9.74262 13.4782C10.6891 13.4782 11.5468 13.0997 12.1739 12.4863C11.7741 12.7031 11.3162 12.8261 10.8296 12.8261Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14394">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconAlgeria
