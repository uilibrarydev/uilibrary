import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconFinland = ({
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
    <g clipPath="url(#clip0_3366_15725)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M19.9154 8.69576H7.82613H7.82609V0.237793C6.90195 0.442715 6.02582 0.774863 5.21738 1.216V8.69568V8.69572H0.0846484C0.0289844 9.12271 0 9.55803 0 10.0001C0 10.4422 0.0289844 10.8775 0.0846484 11.3044H5.21734H5.21738V18.7842C6.02582 19.2253 6.90195 19.5575 7.82609 19.7624V11.3046V11.3045H19.9154C19.9709 10.8775 20 10.4422 20 10.0001C20 9.55803 19.9709 9.12271 19.9154 8.69576Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15725">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconFinland
