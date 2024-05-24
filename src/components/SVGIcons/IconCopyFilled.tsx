import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCopyFilled = ({
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
      d="M6.17468 4.62704L6.17188 6.75V17.2542C6.17188 19.0491 7.62695 20.5042 9.42188 20.5042L18.0382 20.5045C17.7292 21.3782 16.8959 22.0042 15.9163 22.0042H9.42188C6.79852 22.0042 4.67188 19.8776 4.67188 17.2542V6.75C4.67188 5.76929 5.29932 4.93512 6.17468 4.62704ZM18.4219 2C19.6645 2 20.6719 3.00736 20.6719 4.25V17.25C20.6719 18.4926 19.6645 19.5 18.4219 19.5H9.42188C8.17923 19.5 7.17188 18.4926 7.17188 17.25V4.25C7.17188 3.00736 8.17923 2 9.42188 2H18.4219Z"
      fill="#222222"
    />
  </svg>
)

export default IconCopyFilled
