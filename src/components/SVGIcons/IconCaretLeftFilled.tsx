import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretLeftFilled = ({
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
      d="M15.0937 17.8983C15.0937 18.9722 13.8288 19.5462 13.0206 18.839L6.70992 13.3172C5.9131 12.6199 5.9131 11.3804 6.70992 10.6831L13.0206 5.16132C13.8288 4.45412 15.0937 5.02809 15.0937 6.10204L15.0937 17.8983Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretLeftFilled
