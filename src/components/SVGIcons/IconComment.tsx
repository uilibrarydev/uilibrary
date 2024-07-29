import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconComment = ({
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
      id="Shape"
      d="M5.96875 18C4.17382 18 2.71875 16.5449 2.71875 14.75V6.25C2.71875 4.45507 4.17382 3 5.96875 3H19.4688C21.2637 3 22.7188 4.45507 22.7188 6.25V14.75C22.7188 16.5449 21.2637 18 19.4688 18H13.7312L8.71743 21.7507C8.1646 22.1642 7.38125 22.0512 6.96776 21.4984C6.80611 21.2822 6.71875 21.0196 6.71875 20.7499L6.71796 18H5.96875ZM13.2323 16.5H19.4688C20.4352 16.5 21.2188 15.7165 21.2188 14.75V6.25C21.2188 5.2835 20.4352 4.5 19.4688 4.5H5.96875C5.00225 4.5 4.21875 5.2835 4.21875 6.25V14.75C4.21875 15.7165 5.00225 16.5 5.96875 16.5H8.21754L8.21775 17.2498L8.21861 20.2506L13.2323 16.5Z"
      fill="#222222"
    />
  </svg>
)

export default IconComment
