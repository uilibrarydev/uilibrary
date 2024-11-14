import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
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
      d="M11.1669 18.839C10.3586 19.5462 9.09375 18.9722 9.09375 17.8983L9.09375 6.10204C9.09375 5.02809 10.3587 4.45412 11.1669 5.16132L17.4775 10.6831C18.2744 11.3804 18.2744 12.6199 17.4775 13.3172L11.1669 18.839ZM10.5938 17.3473L16.4898 12.1883C16.6036 12.0887 16.6036 11.9116 16.4898 11.812L10.5938 6.65298L10.5938 17.3473Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretRight
