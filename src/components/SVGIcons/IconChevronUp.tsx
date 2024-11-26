import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronUp = ({
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
    <path
      d="M4.32904 15.5303C4.62194 15.8232 5.09681 15.8232 5.38971 15.5303L12.1094 8.81066L18.829 15.5303C19.1219 15.8232 19.5968 15.8232 19.8897 15.5303C20.1826 15.2374 20.1826 14.7626 19.8897 14.4697L12.6397 7.21967C12.3468 6.92678 11.8719 6.92678 11.579 7.21967L4.32904 14.4697C4.03615 14.7626 4.03615 15.2374 4.32904 15.5303Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronUp
