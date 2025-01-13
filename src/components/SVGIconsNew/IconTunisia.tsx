import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTunisia = ({
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
    <g clipPath="url(#clip0_3366_16205)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M9.99999 14.7825C12.6414 14.7825 14.7826 12.6413 14.7826 9.9999C14.7826 7.35854 12.6414 5.21729 9.99999 5.21729C7.35863 5.21729 5.21738 7.35854 5.21738 9.9999C5.21738 12.6413 7.35863 14.7825 9.99999 14.7825Z"
        fill="#F0F0F0"
      />
      <path
        d="M10.5892 8.17139L11.4096 9.30205L12.7384 8.87119L11.9167 10.0009L12.7371 11.1315L11.4087 10.699L10.587 11.8287L10.5878 10.4318L9.25949 9.99928L10.5883 9.56842L10.5892 8.17139Z"
        fill="#D80027"
      />
      <path
        d="M11.087 12.8261C9.52617 12.8261 8.26086 11.5608 8.26086 10C8.26086 8.43923 9.52617 7.17392 11.087 7.17392C11.5736 7.17392 12.0315 7.29696 12.4313 7.5136C11.8041 6.90028 10.9465 6.52173 10 6.52173C8.07906 6.52173 6.52176 8.07899 6.52176 9.99997C6.52176 11.9209 8.07906 13.4782 10 13.4782C10.9465 13.4782 11.8042 13.0997 12.4313 12.4863C12.0315 12.7031 11.5736 12.8261 11.087 12.8261Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16205">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconTunisia
