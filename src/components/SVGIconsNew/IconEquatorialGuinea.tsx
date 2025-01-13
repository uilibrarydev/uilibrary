import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconEquatorialGuinea = ({
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
    <g clipPath="url(#clip0_3366_15567)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.08696 6.52176H19.378C17.9651 2.71375 14.2996 0 10 0C7.23852 0 4.73879 1.11949 2.92926 2.92926L6.08696 6.52176Z"
        fill="#6DA544"
      />
      <path
        d="M6.08696 13.4783H19.378C17.9651 17.2863 14.2996 20 10 20C7.23852 20 4.73879 18.8805 2.92926 17.0708L6.08696 13.4783Z"
        fill="#D80027"
      />
      <path
        d="M2.9289 2.92896C-0.976339 6.83419 -0.976339 13.1659 2.9289 17.0711C4.54268 15.4574 6.09475 13.9053 9.99999 10L2.9289 2.92896Z"
        fill="#0052B4"
      />
      <path
        d="M11.7391 8.26074V10.4346C11.7391 11.7659 13.4783 12.1738 13.4783 12.1738C13.4783 12.1738 15.2174 11.7659 15.2174 10.4346V8.26074H11.7391Z"
        fill="#DEDDE0"
      />
      <path d="M13.0435 10.0435H13.9131V11.3043H13.0435V10.0435Z" fill="#786145" />
      <path
        d="M14.3478 9.56513C14.3478 9.08485 13.9585 8.69556 13.4783 8.69556C12.998 8.69556 12.6087 9.08485 12.6087 9.56513C12.3686 9.56513 12.1739 9.75978 12.1739 9.99989C12.1739 10.24 12.3686 10.4347 12.6087 10.4347H14.3478C14.5879 10.4347 14.7826 10.24 14.7826 9.99989C14.7826 9.75978 14.588 9.56513 14.3478 9.56513Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15567">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconEquatorialGuinea
