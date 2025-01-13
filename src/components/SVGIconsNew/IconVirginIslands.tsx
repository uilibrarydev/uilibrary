import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconVirginIslands = ({
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
    <g clipPath="url(#clip0_3366_16479)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FCFCFC"
      />
      <path
        d="M11.6984 6.9862C11.6984 6.04823 10.938 5.28784 10 5.28784C9.062 5.28784 8.30161 6.04823 8.30161 6.9862H4.56525C4.56525 7.90968 5.3697 8.65839 6.29318 8.65839H6.23755C6.23755 9.58194 6.98615 10.3307 7.90978 10.3307C7.90978 11.1484 8.49704 11.8278 9.27263 11.9731L9.26829 11.9828H10.7318L10.7274 11.9731C11.5031 11.8278 12.0903 11.1483 12.0903 10.3307C13.0139 10.3307 13.7625 9.58194 13.7625 8.65839H13.7068C14.6303 8.65839 15.4348 7.90968 15.4348 6.9862H11.6984Z"
        fill="#FFDA44"
      />
      <path
        d="M9.25343 11.8096L8.20038 14.187C8.756 14.4129 9.36331 14.5384 10.0001 14.5384C10.6368 14.5384 11.2441 14.4129 11.7997 14.187L10.7467 11.8096H9.25343Z"
        fill="#FFDA44"
      />
      <path
        d="M7.82608 7.82129V10.7467C7.82608 12.4107 9.99999 12.9206 9.99999 12.9206C9.99999 12.9206 12.1739 12.4107 12.1739 10.7467V7.82129H7.82608Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.42495 10.0703L3.60069 13.3587L4.76421 10.0703H5.65217L3.95585 14.4181H3.24549L1.53702 10.0703H2.42495Z"
        fill="#338AF3"
      />
      <path d="M16.0869 14.4181V10.0703H16.932V14.4181H16.0869Z" fill="#338AF3" />
      <path
        d="M8.69568 8.76611V12.3112C8.99455 12.5312 9.31611 12.6824 9.56525 12.7793V8.76611H8.69568Z"
        fill="#D80027"
      />
      <path
        d="M11.3044 8.76611V12.3112C11.0055 12.5312 10.6839 12.6824 10.4348 12.7793V8.76611H11.3044Z"
        fill="#D80027"
      />
      <path d="M7.82608 7.82129H12.1739V9.20082H7.82608V7.82129Z" fill="#0052B4" />
    </g>
    <defs>
      <clipPath id="clip0_3366_16479">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconVirginIslands
