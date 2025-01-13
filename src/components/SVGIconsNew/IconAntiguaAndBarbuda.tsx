import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAntiguaAndBarbuda = ({
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
    <g clipPath="url(#clip0_3366_14438)">
      <path
        d="M0 10.0001C0 10.685 0.0690625 11.3539 0.200273 12.0001L10 12.6088L19.7998 12.0001C19.931 11.3539 20 10.685 20 10.0001C20 9.31511 19.9309 8.64628 19.7998 8.00007L10 7.39136L0.200273 8.00007C0.0690625 8.64628 0 9.31511 0 10.0001H0Z"
        fill="#0052B4"
      />
      <path
        d="M19.7997 12H0.200256C1.12678 16.5645 5.16213 20 9.99998 20C14.8378 20 18.8732 16.5645 19.7997 12Z"
        fill="#F0F0F0"
      />
      <path
        d="M0.200256 8H19.7998C18.8732 3.43555 14.8379 0 9.99998 0C5.16205 0 1.12678 3.43555 0.200256 8Z"
        fill="black"
      />
      <path
        d="M14.3478 8.00007H5.65216L7.42872 7.16437L6.48267 5.44386L8.41177 5.8128L8.6563 3.86401L9.99997 5.29737L11.3437 3.86401L11.5881 5.8128L13.5173 5.44386L12.5713 7.16444L14.3478 8.00007Z"
        fill="#FFDA44"
      />
      <path
        d="M0 10.0001C0 15.5229 4.47719 20.0001 10 20.0001L1.99984 3.99976C0.744219 5.6712 0 7.74866 0 10.0001Z"
        fill="#A2001D"
      />
      <path
        d="M10 20.0001C15.5228 20.0001 20 15.5229 20 10.0001C20 7.74866 19.2558 5.6712 18.0002 3.99976L10 20.0001Z"
        fill="#A2001D"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14438">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconAntiguaAndBarbuda
