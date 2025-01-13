import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDominicanRepublic = ({
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
    <g clipPath="url(#clip0_3366_15460)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M0.344482 12.6086C1.26784 16.0345 3.96538 18.7321 7.39132 19.6555V12.6086H0.344482Z"
        fill="#D80027"
      />
      <path
        d="M7.39128 0.344482C3.96538 1.2678 1.2678 3.96538 0.344482 7.39128H7.39132V0.344482H7.39128Z"
        fill="#0052B4"
      />
      <path
        d="M19.6555 7.39128C18.7322 3.96538 16.0346 1.2678 12.6087 0.344482V7.39132H19.6555V7.39128Z"
        fill="#D80027"
      />
      <path
        d="M12.6087 19.6555C16.0346 18.7321 18.7322 16.0346 19.6555 12.6086H12.6087V19.6555Z"
        fill="#0052B4"
      />
      <path
        d="M12.6087 10.0001C12.6087 11.4409 11.4408 12.6088 10 12.6088C8.55927 12.6088 7.3913 11.4409 7.3913 10.0001C7.3913 8.55929 10 7.39136 10 7.39136C10 7.39136 12.6087 8.55929 12.6087 10.0001Z"
        fill="#496E2D"
      />
      <path
        d="M7.3913 10.0001C7.3913 8.55929 8.55927 7.39136 10 7.39136C11.4408 7.39136 12.6087 8.55929 12.6087 10.0001"
        fill="#0052B4"
      />
      <path
        d="M8.53259 8.69556V10.326C8.53259 11.1364 9.18955 11.7934 9.99998 11.7934C10.8104 11.7934 11.4674 11.1364 11.4674 10.326V8.69556H8.53259Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15460">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconDominicanRepublic
