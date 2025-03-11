import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconFlashFilled = ({
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
      d="M7.42505 2.83052C7.60245 2.33254 8.07392 2 8.60256 2H15.0562C15.9094 2 16.5118 2.83587 16.242 3.64528L14.7905 8H18.7492C19.8534 8 20.4153 9.32682 19.647 10.1198L8.586 21.536C7.53226 22.6236 5.71405 21.6422 6.04495 20.1645L7.31418 14.4964L5.74573 14.4904C4.53898 14.4858 3.69895 13.2899 4.10392 12.1532L7.42505 2.83052Z"
      fill="#222222"
    />
  </svg>
)

export default IconFlashFilled
