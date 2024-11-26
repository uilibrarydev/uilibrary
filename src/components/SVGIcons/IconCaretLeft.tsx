import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretLeft = ({
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
      d="M13.0206 18.839C13.8288 19.5462 15.0937 18.9722 15.0937 17.8983L15.0937 6.10204C15.0937 5.02809 13.8288 4.45412 13.0206 5.16132L6.70992 10.6831C5.9131 11.3804 5.9131 12.6199 6.70992 13.3172L13.0206 18.839ZM13.5937 17.3473L7.69768 12.1883C7.58385 12.0887 7.58385 11.9116 7.69768 11.812L13.5937 6.65298L13.5937 17.3473Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretLeft
