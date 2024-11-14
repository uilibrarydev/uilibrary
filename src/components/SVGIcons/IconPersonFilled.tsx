import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPersonFilled = ({
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
        d="M17.7542 13.9999C18.9962 13.9999 20.003 15.0068 20.003 16.2488V17.1673C20.003 17.7406 19.8238 18.2997 19.4905 18.7662C17.9446 20.9294 15.4203 22.0011 12 22.0011C8.57903 22.0011 6.05607 20.9289 4.51391 18.7646C4.18195 18.2987 4.00354 17.7409 4.00354 17.1688V16.2488C4.00354 15.0068 5.0104 13.9999 6.25242 13.9999H17.7542ZM12 2.00464C14.7614 2.00464 17 4.24321 17 7.00464C17 9.76606 14.7614 12.0046 12 12.0046C9.23857 12.0046 7 9.76606 7 7.00464C7 4.24321 9.23857 2.00464 12 2.00464Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconPersonFilled
