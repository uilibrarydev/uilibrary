import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBermuda = ({
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
    <g clipPath="url(#clip0_3366_14722)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 10.0024 10 0.00109375 10 0C15.5228 0 20 4.47719 20 10Z"
        fill="#D80027"
      />
      <path d="M10 4.78271V8.15549L6.52176 4.78271H10Z" fill="#0052B4" />
      <path
        d="M5.21739 10.0002H8.15532L5.21739 6.08716L4.78262 9.13063L5.21739 10.0002Z"
        fill="#0052B4"
      />
      <path
        d="M9.97324 9.9999H9.99999C9.99999 9.99092 9.99999 9.98217 9.99999 9.97314C9.99109 9.98209 9.98218 9.991 9.97324 9.9999Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 5.21738C10 3.45781 10 2.30488 10 0H9.99832C4.47621 0.0009375 0 4.4777 0 10H5.21738V7.06207L8.15531 10H9.97328C9.98219 9.99109 9.99109 9.98219 10 9.97324C10 9.29953 10 8.6984 10 8.15539L7.06203 5.21738H10Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.05918 1.30444C3.49516 2.19503 2.19488 3.49526 1.30434 5.05929V10.4349H3.91305V3.91323V3.91315H10.4348C10.4348 3.09038 10.4348 2.30655 10.4348 1.30444H5.05918Z"
        fill="#D80027"
      />
      <path
        d="M10.3975 9.16788L6.44706 5.21753H5.21738V5.21761L10.3974 10.3976H10.3975C10.3975 10.3977 10.3975 9.54976 10.3975 9.16788Z"
        fill="#D80027"
      />
      <path
        d="M11.3043 5.21729V9.99986C11.3043 12.3295 17.3913 12.3295 17.3913 9.99986V5.21729H11.3043Z"
        fill="#F3F3F3"
      />
      <path
        d="M11.3043 10V10C11.3043 12.3297 14.3478 13.0435 14.3478 13.0435C14.3478 13.0435 17.3913 12.3297 17.3913 10V10H11.3043Z"
        fill="#6DA544"
      />
      <path
        d="M14.3478 8.08691L12.9348 8.69562V9.99996L14.3478 10.8695L15.7609 9.99996V8.69562L14.3478 8.08691Z"
        fill="#A2001D"
      />
      <path d="M12.9348 7.39136H15.7609V8.69569H12.9348V7.39136Z" fill="#338AF3" />
    </g>
    <defs>
      <clipPath id="clip0_3366_14722">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBermuda
