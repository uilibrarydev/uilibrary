import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBritishVirginIslands = ({
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
    <g clipPath="url(#clip0_3366_14909)">
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
        d="M14.3479 10L11.645 12.7029C12.1516 13.6798 13.1714 14.3478 14.3479 14.3478C15.5243 14.3478 16.5442 13.6798 17.0507 12.7029L14.3479 10Z"
        fill="#FFDA44"
      />
      <path
        d="M10 8.77038L6.44709 5.21753H5.21741V5.21761L9.99995 10.0001H10C10 10.0001 10 9.15218 10 8.77038Z"
        fill="#D80027"
      />
      <path
        d="M11.3043 5.21729V9.99986V9.9999C11.3044 12.3296 14.3478 13.0434 14.3478 13.0434C14.3478 13.0434 17.3912 12.3296 17.3913 9.9999V9.99986V5.21729H11.3043Z"
        fill="#6DA544"
      />
      <path d="M13.6957 7.39136H15V10.8696H13.6957V7.39136Z" fill="#F0F0F0" />
      <path
        d="M14.3479 8.04339C14.7081 8.04339 15.0001 7.75139 15.0001 7.3912C15.0001 7.03101 14.7081 6.73901 14.3479 6.73901C13.9877 6.73901 13.6957 7.03101 13.6957 7.3912C13.6957 7.75139 13.9877 8.04339 14.3479 8.04339Z"
        fill="#A2001D"
      />
      <path d="M12.174 6.08691H13.0435V6.95648H12.174V6.08691Z" fill="#FFDA44" />
      <path d="M12.174 8.04346H13.0435V8.91303H12.174V8.04346Z" fill="#FFDA44" />
      <path d="M12.174 10H13.0435V10.8696H12.174V10Z" fill="#FFDA44" />
      <path d="M15.6522 6.08691H16.5218V6.95648H15.6522V6.08691Z" fill="#FFDA44" />
      <path d="M15.6522 8.04346H16.5218V8.91303H15.6522V8.04346Z" fill="#FFDA44" />
      <path d="M15.6522 10H16.5218V10.8696H15.6522V10Z" fill="#FFDA44" />
    </g>
    <defs>
      <clipPath id="clip0_3366_14909">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBritishVirginIslands
