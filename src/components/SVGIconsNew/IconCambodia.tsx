import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCambodia = ({
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
    <g clipPath="url(#clip0_3366_15050)">
      <path
        d="M0 10.0001C0 11.7325 0.440742 13.362 1.2159 14.7827L10 15.6523L18.7841 14.7827C19.5593 13.362 20 11.7325 20 10.0001C20 8.26767 19.5593 6.63821 18.7841 5.21747L10 4.3479L1.2159 5.21747C0.440742 6.63821 0 8.26767 0 10.0001H0Z"
        fill="#D80027"
      />
      <path
        d="M1.21588 5.21738H18.784C17.088 2.10895 13.7904 0 9.99998 0C6.20955 0 2.91194 2.10895 1.21588 5.21738Z"
        fill="#0052B4"
      />
      <path
        d="M9.99998 20.0001C13.7904 20.0001 17.088 17.8912 18.7841 14.7827H1.21588C2.91194 17.8912 6.20955 20.0001 9.99998 20.0001Z"
        fill="#0052B4"
      />
      <path
        d="M13.4782 11.9566V10.6523H12.6087V8.91315L11.7391 8.04358L10.8695 8.91315V7.17401L9.99997 6.30444L9.1304 7.17401V8.91315L8.26083 8.04358L7.39126 8.91315V10.6523H6.52173V11.9566H5.65216V13.261H14.3478V11.9566H13.4782Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15050">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCambodia
