import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretRightFilled = ({
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
      d="M9.90625 17.8983C9.90625 18.9722 11.1711 19.5462 11.9794 18.839L18.29 13.3172C19.0869 12.6199 19.0869 11.3804 18.29 10.6831L11.9794 5.16132C11.1712 4.45412 9.90625 5.02809 9.90625 6.10204V17.8983Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretRightFilled
