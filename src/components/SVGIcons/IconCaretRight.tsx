import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretRight = ({
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
      d="M11.9794 18.839C11.1711 19.5462 9.90625 18.9722 9.90625 17.8983L9.90625 6.10204C9.90625 5.02809 11.1712 4.45412 11.9794 5.16132L18.29 10.6831C19.0869 11.3804 19.0869 12.6199 18.29 13.3172L11.9794 18.839ZM11.4063 17.3473L17.3023 12.1883C17.4161 12.0887 17.4161 11.9116 17.3023 11.812L11.4062 6.65298L11.4063 17.3473Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretRight
