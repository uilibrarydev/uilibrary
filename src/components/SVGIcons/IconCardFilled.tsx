import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCardFilled = ({
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
      d="M6.18359 5C4.38867 5 2.93359 6.45507 2.93359 8.25V9.5H22.9336V8.25C22.9336 6.45507 21.4785 5 19.6836 5H6.18359ZM22.9336 11H2.93359V15.75C2.93359 17.5449 4.38867 19 6.18359 19H19.6836C21.4785 19 22.9336 17.5449 22.9336 15.75V11Z"
      fill="#222222"
    />
  </svg>
)

export default IconCardFilled
