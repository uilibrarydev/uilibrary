import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMaldives = ({
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
    <g clipPath="url(#clip0_3366_14599)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#D80027"
      />
      <path d="M3.47824 5.21729H16.5217V14.7825H3.47824V5.21729Z" fill="#6DA544" />
      <path
        d="M11.6104 12.8261C10.0496 12.8261 8.78433 11.5608 8.78433 10C8.78433 8.43923 10.0496 7.17392 11.6104 7.17392C12.0971 7.17392 12.555 7.29696 12.9548 7.5136C12.3276 6.90028 11.47 6.52173 10.5235 6.52173C8.60253 6.52173 7.04523 8.07899 7.04523 9.99997C7.04523 11.9209 8.60253 13.4782 10.5235 13.4782C11.47 13.4782 12.3276 13.0997 12.9548 12.4863C12.555 12.7031 12.0971 12.8261 11.6104 12.8261Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14599">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMaldives
