import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconIsrael = ({
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
    <g clipPath="url(#clip0_3366_16171)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M13.7653 7.82601H11.255L9.99997 5.6521L8.74493 7.82601H6.23462L7.48985 9.99991L6.23462 12.1738H8.74493L9.99997 14.3477L11.255 12.1738H13.7653L12.5101 9.99991L13.7653 7.82601ZM11.542 9.99991L10.771 11.3354H9.22903L8.45798 9.99991L9.22899 8.66444H10.771L11.542 9.99991ZM9.99997 7.32894L10.2869 7.82597H9.7131L9.99997 7.32894ZM7.68692 8.66444H8.26083L7.97388 9.16147L7.68692 8.66444ZM7.68692 11.3354L7.97392 10.8383L8.26087 11.3354H7.68692ZM9.99997 12.6708L9.71306 12.1738H10.2869L9.99997 12.6708ZM12.313 11.3354H11.7391L12.0261 10.8383L12.313 11.3354ZM11.7391 8.66444H12.313L12.0261 9.16147L11.7391 8.66444Z"
        fill="#0052B4"
      />
      <path
        d="M16.2249 2.17383H3.77509C2.86248 2.9007 2.07982 3.78359 1.46771 4.78254H18.5322C17.9201 3.78363 17.1374 2.9007 16.2249 2.17383Z"
        fill="#0052B4"
      />
      <path
        d="M3.77509 17.826H16.2248C17.1374 17.0991 17.9201 16.2162 18.5322 15.2173H1.46771C2.07986 16.2162 2.86252 17.0991 3.77509 17.826Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16171">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconIsrael
