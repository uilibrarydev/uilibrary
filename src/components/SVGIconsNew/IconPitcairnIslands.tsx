import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPitcairnIslands = ({
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
    <g clipPath="url(#clip0_3366_15350)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 10.0024 10 0.00109375 10 0C15.5228 0 20 4.47719 20 10Z"
        fill="#0052B4"
      />
      <path
        d="M9.97327 9.9999H10C10 9.99092 10 9.98217 10 9.97314C9.99112 9.98209 9.98221 9.991 9.97327 9.9999Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 5.21738C10 3.45781 10 2.30488 10 0H9.99832C4.47621 0.0009375 0 4.4777 0 10H5.21738V7.06207L8.15531 10H9.97328C9.98219 9.99109 9.99109 9.98219 10 9.97324C10 9.29953 10 8.6984 10 8.15539L7.06203 5.21738H10Z"
        fill="#F0F0F0"
      />
      <path
        d="M5.05917 1.30444C3.49514 2.19503 2.19487 3.49526 1.30432 5.05929V10.0001H3.91303V3.91323V3.91315H9.99999C9.99999 3.09038 9.99999 2.30655 9.99999 1.30444H5.05917Z"
        fill="#D80027"
      />
      <path
        d="M10 8.77038L6.44709 5.21753H5.21741V5.21761L9.99995 10.0001H10C10 10.0001 10 9.15218 10 8.77038Z"
        fill="#D80027"
      />
      <path
        d="M15.6522 6.08699L14.3479 6.5218L13.0435 6.08699L12.6088 5.00004L13.0435 3.91309H15.6522L15.2174 5.00004L15.6522 6.08699Z"
        fill="#ACABB1"
      />
      <path
        d="M11.3043 6.08691V10.8695C11.3043 13.1992 14.3478 13.913 14.3478 13.913C14.3478 13.913 17.3913 13.1992 17.3913 10.8695V6.08691H11.3043Z"
        fill="#338AF3"
      />
      <path
        d="M11.5787 12.0026C12.3269 13.4389 14.3479 13.9131 14.3479 13.9131C14.3479 13.9131 16.3689 13.4389 17.117 12.0026L14.3479 7.39136L11.5787 12.0026Z"
        fill="#6DA544"
      />
      <path
        d="M17.3913 10.8212L14.3478 6.08691L11.3043 10.8212V10.8695C11.3043 11.3007 11.4088 11.6764 11.5787 12.0025L14.3478 7.69492L17.1169 12.0025C17.2868 11.6763 17.3913 11.3006 17.3913 10.8695V10.8212Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15350">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconPitcairnIslands
