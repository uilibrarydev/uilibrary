import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSendFilled = ({
  size,
  type,
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
      [`svg-icon__type-${type}`]: type,
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M12.8147 12.1972L5.28344 13.4524C5.10705 13.4818 4.95979 13.6032 4.89723 13.7707L2.29933 20.7281C2.05066 21.3675 2.72008 21.9776 3.33375 21.6707L21.3337 12.6707C21.8865 12.3943 21.8865 11.6055 21.3337 11.3291L3.33375 2.32909C2.72008 2.02226 2.05066 2.6323 2.29933 3.27174L4.89723 10.2291C4.95979 10.3967 5.10705 10.518 5.28344 10.5474L12.8147 11.8026C12.9236 11.8208 12.9972 11.9238 12.9791 12.0328C12.965 12.1171 12.899 12.1831 12.8147 12.1972Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconSendFilled
