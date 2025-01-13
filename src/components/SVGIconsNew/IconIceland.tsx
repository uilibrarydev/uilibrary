import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconIceland = ({
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
    <g clipPath="url(#clip0_3366_16055)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M0.344482 12.6086C0.923076 14.7555 2.19827 16.6162 3.91304 17.9337V12.6086H0.344482Z"
        fill="#0052B4"
      />
      <path
        d="M9.13037 19.9619C9.41701 19.9866 9.70689 19.9999 9.99994 19.9999C14.6202 19.9999 18.5079 16.8663 19.6554 12.6086H9.13037V19.9619Z"
        fill="#0052B4"
      />
      <path
        d="M19.6554 7.39129C18.5079 3.13363 14.6202 0 9.99994 0C9.70689 0 9.41701 0.0133594 9.13037 0.0380469V7.39129H19.6554Z"
        fill="#0052B4"
      />
      <path
        d="M3.91304 2.06616C2.19827 3.38374 0.923076 5.2444 0.344482 7.39124H3.91304V2.06616Z"
        fill="#0052B4"
      />
      <path
        d="M19.9154 8.69576H7.82613H7.82609V0.237793C6.90195 0.442715 6.02582 0.774863 5.21738 1.216V8.69572H0.0846484C0.0289844 9.12271 0 9.55803 0 10.0001C0 10.4422 0.0289844 10.8775 0.0846484 11.3044H5.21734H5.21738V18.7842C6.02582 19.2253 6.90195 19.5575 7.82609 19.7624V11.3046V11.3045H19.9154C19.9709 10.8775 20 10.4422 20 10.0001C20 9.55803 19.9709 9.12271 19.9154 8.69576Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16055">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconIceland
