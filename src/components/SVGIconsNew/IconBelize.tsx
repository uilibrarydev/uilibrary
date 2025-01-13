import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBelize = ({
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
    <g clipPath="url(#clip0_3366_14708)">
      <path
        d="M20 10.0001C20 6.56804 18.2707 3.54019 15.6362 1.73925L10 1.30444L4.36379 1.73921C1.7293 3.54019 0 6.56808 0 10.0001C0 13.4323 1.7293 16.46 4.36379 18.261L10 18.6958L15.6362 18.261C18.2707 16.46 20 13.4323 20 10.0001Z"
        fill="#0052B4"
      />
      <path
        d="M15.6362 1.73914C14.0313 0.642031 12.0908 0 9.99998 0C7.90924 0 5.96865 0.642031 4.36377 1.73914H15.6362Z"
        fill="#A2001D"
      />
      <path
        d="M4.36377 18.2607C5.96861 19.3579 7.90924 19.9999 9.99998 19.9999C12.0908 19.9999 14.0313 19.3579 15.6362 18.2607H4.36377Z"
        fill="#A2001D"
      />
      <path
        d="M10 14.7825C12.6414 14.7825 14.7826 12.6413 14.7826 9.9999C14.7826 7.35854 12.6414 5.21729 10 5.21729C7.35866 5.21729 5.21741 7.35854 5.21741 9.9999C5.21741 12.6413 7.35866 14.7825 10 14.7825Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99996 13.913C12.1611 13.913 13.913 12.1611 13.913 9.99996C13.913 7.83884 12.1611 6.08691 9.99996 6.08691C7.83884 6.08691 6.08691 7.83884 6.08691 9.99996C6.08691 12.1611 7.83884 13.913 9.99996 13.913Z"
        fill="#6DA544"
      />
      <path
        d="M9.99995 12.6088C11.4407 12.6088 12.6087 11.4408 12.6087 10.0001C12.6087 8.55932 11.4407 7.39136 9.99995 7.39136C8.5592 7.39136 7.39124 8.55932 7.39124 10.0001C7.39124 11.4408 8.5592 12.6088 9.99995 12.6088Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99996 9.3479L8.58691 10.0001V11.087L9.99996 11.9566L11.413 11.087V10.0001L9.99996 9.3479Z"
        fill="#0052B4"
      />
      <path d="M8.58691 8.69556H11.413V9.99989H8.58691V8.69556Z" fill="#FFDA44" />
    </g>
    <defs>
      <clipPath id="clip0_3366_14708">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBelize
