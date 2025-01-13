import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSlovakia = ({
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
    <g clipPath="url(#clip0_3366_15778)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 20C15.5228 20 20 15.5228 20 9.99997C20 8.77677 19.78 7.60501 19.378 6.52173H0.621992C0.220039 7.60501 0 8.77677 0 9.99997C0 15.5228 4.47719 20 10 20Z"
        fill="#0052B4"
      />
      <path
        d="M10 20C14.2997 20 17.9651 17.2863 19.378 13.4783H0.622009C2.03494 17.2863 5.70037 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M2.58588 5.6521V10.6406C2.58588 13.4783 6.29295 14.3478 6.29295 14.3478C6.29295 14.3478 9.99998 13.4783 9.99998 10.6406V5.6521H2.58588Z"
        fill="#F0F0F0"
      />
      <path
        d="M3.45544 5.6521V10.6406C3.45544 10.9737 3.52943 11.2884 3.67599 11.5833H8.90986C9.05642 11.2884 9.13041 10.9737 9.13041 10.6406V5.6521H3.45544Z"
        fill="#D80027"
      />
      <path
        d="M8.03201 9.1304H6.72772V8.26083H7.59729V7.39126H6.72772V6.52173H5.85815V7.39126H4.98862V8.26083H5.85815V9.1304H4.55377V9.99997H5.85815V10.8695H6.72772V9.99997H8.03201V9.1304Z"
        fill="#F0F0F0"
      />
      <path
        d="M4.86214 12.7973C5.42249 13.1494 5.9982 13.3539 6.29292 13.4448C6.58765 13.3539 7.16335 13.1494 7.7237 12.7973C8.28878 12.4421 8.68491 12.0359 8.90984 11.5834C8.66175 11.4079 8.35905 11.3044 8.03206 11.3044C7.913 11.3044 7.79734 11.3185 7.68612 11.3444C7.45046 10.8089 6.9155 10.4348 6.29296 10.4348C5.67042 10.4348 5.13542 10.8089 4.8998 11.3444C4.78859 11.3185 4.67288 11.3044 4.55386 11.3044C4.22687 11.3044 3.92417 11.4079 3.67609 11.5834C3.90089 12.0359 4.29702 12.4421 4.86214 12.7973Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15778">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSlovakia
