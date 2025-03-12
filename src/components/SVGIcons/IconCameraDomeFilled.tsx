import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCameraDomeFilled = ({
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
      d="M2.45312 3.75C2.45312 2.7835 3.23663 2 4.20312 2H20.7031C21.6696 2 22.4531 2.7835 22.4531 3.75C22.4531 4.7165 21.6696 5.5 20.7031 5.5H4.20313C3.23663 5.5 2.45312 4.7165 2.45312 3.75ZM12.4531 17.5C14.6623 17.5 16.4531 15.7091 16.4531 13.5C16.4531 11.2909 14.6623 9.5 12.4531 9.5C10.244 9.5 8.45312 11.2909 8.45312 13.5C8.45312 15.7091 10.244 17.5 12.4531 17.5ZM14.9531 13.5C14.9531 14.8807 13.8338 16 12.4531 16C11.0724 16 9.95312 14.8807 9.95312 13.5C9.95312 12.1193 11.0724 11 12.4531 11C13.8338 11 14.9531 12.1193 14.9531 13.5ZM3.45312 7H21.4531V13C21.4531 17.9706 17.4237 22 12.4531 22C7.48256 22 3.45312 17.9706 3.45312 13V7ZM12.4531 19C15.4907 19 17.9531 16.5376 17.9531 13.5C17.9531 10.4624 15.4907 8 12.4531 8C9.41556 8 6.95312 10.4624 6.95312 13.5C6.95312 16.5376 9.41556 19 12.4531 19Z"
      fill="#222222"
    />
  </svg>
)

export default IconCameraDomeFilled
