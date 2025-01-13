import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconIran = ({
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
    <g clipPath="url(#clip0_3366_16073)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M13.2479 7.3914H11.9396C11.9504 7.53519 11.9565 7.68026 11.9565 7.82616C11.9565 8.79351 11.7147 9.73112 11.2932 10.3985C11.1632 10.6044 10.9446 10.8951 10.6521 11.0912V7.39136H9.34781V11.0912C9.05535 10.8951 8.83679 10.6044 8.70675 10.3985C8.28519 9.73112 8.04343 8.79351 8.04343 7.82616C8.04343 7.68026 8.04961 7.53515 8.06039 7.3914H6.75203C6.74363 7.53448 6.73906 7.6794 6.73906 7.82616C6.73906 10.508 8.1714 12.6088 9.99992 12.6088C11.8284 12.6088 13.2608 10.508 13.2608 7.82616C13.2609 7.6794 13.2563 7.53448 13.2479 7.3914Z"
        fill="#D80027"
      />
      <path
        d="M4.13043 4.78262H5.43476V5.65219H6.7391V4.78262H8.04344V5.65219H9.34777V4.78262H10.6521V5.65219H11.9564V4.78262H13.2608V5.65219H14.5651V4.78262H15.8694V5.65219H19.0076C17.3902 2.30723 13.9646 0 10 0C6.03543 0 2.60976 2.30723 0.992264 5.65219H4.13043V4.78262Z"
        fill="#6DA544"
      />
      <path
        d="M15.8696 14.3479V15.2175H14.5652V14.3479H13.2609V15.2175H11.9566V14.3479H10.6522V15.2175H9.34789V14.3479H8.04355V15.2175H6.73922V14.3479H5.43476V15.2175H4.13043V14.3479H0.992264C2.60976 17.6929 6.03539 20.0001 10 20.0001C13.9646 20.0001 17.3902 17.6929 19.0077 14.3479H15.8696Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16073">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconIran
