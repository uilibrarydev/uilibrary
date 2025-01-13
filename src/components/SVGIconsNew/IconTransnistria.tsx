import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTransnistria = ({
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
    <g clipPath="url(#clip0_3366_16145)">
      <path
        d="M19.6555 7.39129C18.508 3.13363 14.6203 0 9.99999 0C5.37972 0 1.49198 3.13363 0.344482 7.39129L9.99999 7.82609L19.6555 7.39129Z"
        fill="#A2001D"
      />
      <path
        d="M0.344482 12.6086C1.49198 16.8662 5.37972 19.9999 9.99999 19.9999C14.6203 19.9999 18.508 16.8663 19.6555 12.6086L9.99999 12.1738L0.344482 12.6086Z"
        fill="#A2001D"
      />
      <path
        d="M19.6555 7.39136H0.344492C0.120313 8.22312 0 9.09745 0 10.0001C0 10.9027 0.120313 11.777 0.344492 12.6088H19.6555C19.8797 11.777 20 10.9027 20 10.0001C20 9.09745 19.8797 8.22312 19.6555 7.39136Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16145">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconTransnistria
