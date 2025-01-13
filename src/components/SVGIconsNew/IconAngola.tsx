import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAngola = ({
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
    <g clipPath="url(#clip0_3366_14416)">
      <path
        d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10C19.5652 10 10 11.3043 10 11.3043L0 10Z"
        fill="#D80027"
      />
      <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10" fill="black" />
      <path
        d="M8.62881 7.95361L9.47655 8.56885L9.1535 9.56525L10.0006 8.949L10.8484 9.56424L10.5241 8.56814L11.3712 7.95197L10.3237 7.9526L9.99936 6.95654L9.67628 7.95295L8.62881 7.95361Z"
        fill="#FFDA44"
      />
      <path
        d="M12.5 5.66992C11.712 5.21496 10.8504 5.00023 10 5.00172V6.30578C10.6286 6.30465 11.2654 6.46324 11.8478 6.79957C13.6126 7.81847 14.2194 10.0832 13.2005 11.8479C12.1816 13.6127 9.91695 14.2195 8.15215 13.2006C7.63801 12.9038 7.22297 12.5007 6.91703 12.0356L5.82812 12.7545C6.24207 13.3838 6.80441 13.9286 7.5 14.3302C9.88766 15.7087 12.9516 14.8877 14.3301 12.5C15.7086 10.1124 14.8877 7.04844 12.5 5.66992Z"
        fill="#FFDA44"
      />
      <path
        d="M7.1168 9.13037C6.77109 9.76236 7.0032 10.555 7.63515 10.9007L11.8714 13.2155C11.5834 13.7421 11.7364 14.3831 12.263 14.6712L13.4073 15.2972C13.9339 15.5853 14.5945 15.3919 14.8826 14.8652L15.5086 13.7209L7.1168 9.13037Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14416">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconAngola
