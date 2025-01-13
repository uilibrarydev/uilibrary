import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconRepublicOfMacedonia = ({
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
    <g clipPath="url(#clip0_3366_15474)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#FFDA44"
      />
      <path
        d="M11.5208 19.885C13.1472 19.6369 14.6443 18.9964 15.9136 18.064L10 10L11.5208 19.885Z"
        fill="#D80027"
      />
      <path
        d="M8.47922 0.11499C6.85285 0.363115 5.35574 1.00358 4.08636 1.93597L10 10L8.47922 0.11499Z"
        fill="#D80027"
      />
      <path
        d="M4.08636 18.064C5.35566 18.9964 6.85277 19.6369 8.47914 19.8851L10 10L4.08636 18.064Z"
        fill="#D80027"
      />
      <path
        d="M1.93597 4.08643C1.00354 5.3558 0.363154 6.85287 0.11499 8.47928L10 10.0001L1.93597 4.08643Z"
        fill="#D80027"
      />
      <path
        d="M0.11499 11.5208C0.363115 13.1472 1.00358 14.6443 1.93601 15.9136L10 10L0.11499 11.5208Z"
        fill="#D80027"
      />
      <path
        d="M19.885 8.47924C19.6369 6.85287 18.9964 5.35576 18.064 4.08643L10 10.0001L19.885 8.47924Z"
        fill="#D80027"
      />
      <path
        d="M15.9136 1.93593C14.6443 1.00354 13.1472 0.363115 11.5208 0.11499L10 10L15.9136 1.93593Z"
        fill="#D80027"
      />
      <path
        d="M18.0641 15.9136C18.9965 14.6443 19.6369 13.1471 19.8851 11.5208L10 10L18.0641 15.9136Z"
        fill="#D80027"
      />
      <path
        d="M10 13.4782C11.921 13.4782 13.4783 11.921 13.4783 9.99997C13.4783 8.07899 11.921 6.52173 10 6.52173C8.07905 6.52173 6.52179 8.07899 6.52179 9.99997C6.52179 11.921 8.07905 13.4782 10 13.4782Z"
        fill="#D80027"
      />
      <path
        d="M10 12.6088C11.4408 12.6088 12.6087 11.4408 12.6087 10.0001C12.6087 8.55932 11.4408 7.39136 10 7.39136C8.55926 7.39136 7.3913 8.55932 7.3913 10.0001C7.3913 11.4408 8.55926 12.6088 10 12.6088Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15474">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconRepublicOfMacedonia
