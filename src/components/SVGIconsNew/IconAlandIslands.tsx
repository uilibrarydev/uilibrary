import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAlandIslands = ({
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
    <g clipPath="url(#clip0_3366_14383)">
      <path
        d="M19.6555 12.6087C19.8797 11.777 20 10.9027 20 10C20 9.09742 19.8797 8.22312 19.6555 7.39133L9.13043 0.0380859C7.17648 0.206445 5.3834 0.936523 3.91305 2.06625L0.344492 7.39133C0.120313 8.22312 0 9.09742 0 10C0 10.8974 0.118867 11.7669 0.340547 12.5943L3.91301 17.9338C5.38336 19.0636 7.17645 19.7937 9.13039 19.962L19.6555 12.6087Z"
        fill="#FFDA44"
      />
      <path
        d="M0.344498 12.6086C0.923091 14.7555 2.19829 16.6162 3.91305 17.9337V12.6086H0.344498Z"
        fill="#0052B4"
      />
      <path
        d="M9.13043 19.9619C9.41707 19.9866 9.70696 19.9999 10 19.9999C14.6203 19.9999 18.508 16.8663 19.6555 12.6086H9.13043V19.9619Z"
        fill="#0052B4"
      />
      <path
        d="M19.6555 7.39129C18.508 3.13363 14.6203 0 10 0C9.70696 0 9.41707 0.0133594 9.13043 0.0380469V7.39129H19.6555Z"
        fill="#0052B4"
      />
      <path
        d="M3.91305 2.06616C2.19829 3.38374 0.923091 5.2444 0.344498 7.39124H3.91305V2.06616Z"
        fill="#0052B4"
      />
      <path
        d="M19.9154 8.69576H7.82613H7.82609V0.237793C6.90195 0.442715 6.02582 0.774863 5.21738 1.216V8.69572H0.0846484C0.0289844 9.12271 0 9.55803 0 10.0001C0 10.4422 0.0289844 10.8775 0.0846484 11.3044H5.21734H5.21738V18.7842C6.02582 19.2253 6.90195 19.5575 7.82609 19.7624V11.3046V11.3045H19.9154C19.9709 10.8775 20 10.4422 20 10.0001C20 9.55803 19.9709 9.12271 19.9154 8.69576Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14383">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconAlandIslands
