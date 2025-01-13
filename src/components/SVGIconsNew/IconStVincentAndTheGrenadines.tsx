import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconStVincentAndTheGrenadines = ({
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
    <g clipPath="url(#clip0_3366_15957)">
      <path
        d="M14.7826 1.2159C13.3619 0.440742 11.7324 0 10 0C8.26761 0 6.63815 0.440742 5.21741 1.2159L4.34784 10L5.21741 18.7841C6.63815 19.5593 8.26761 20 10 20C11.7324 20 13.3619 19.5593 14.7826 18.7841L15.6522 10L14.7826 1.2159Z"
        fill="#FFDA44"
      />
      <path
        d="M5.21738 18.784V1.21582C2.10895 2.91191 0 6.20953 0 9.99996C0 13.7904 2.10895 17.088 5.21738 18.784Z"
        fill="#338AF3"
      />
      <path
        d="M20 9.99996C20 6.20953 17.891 2.91191 14.7826 1.21582V18.784C17.891 17.088 20 13.7904 20 9.99996Z"
        fill="#6DA544"
      />
      <path
        d="M7.82609 12.6088L6.08691 10.0001L7.82605 7.39136L9.56527 10.0001L7.82609 12.6088Z"
        fill="#6DA544"
      />
      <path
        d="M12.1739 12.6088L10.4348 10.0001L12.1739 7.39136L13.913 10.0001L12.1739 12.6088Z"
        fill="#6DA544"
      />
      <path d="M10 16.087L8.26086 13.4783L10 10.8696L11.7391 13.4783L10 16.087Z" fill="#6DA544" />
    </g>
    <defs>
      <clipPath id="clip0_3366_15957">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconStVincentAndTheGrenadines
