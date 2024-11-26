import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronLeft = ({
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
      d="M15.6397 4.21967C15.9326 4.51256 15.9326 4.98744 15.6397 5.28033L8.92003 12L15.6397 18.7197C15.9326 19.0126 15.9326 19.4874 15.6397 19.7803C15.3468 20.0732 14.8719 20.0732 14.579 19.7803L7.32904 12.5303C7.03615 12.2374 7.03615 11.7626 7.32904 11.4697L14.579 4.21967C14.8719 3.92678 15.3468 3.92678 15.6397 4.21967Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronLeft
