import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
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
      d="M9.09375 17.8983C9.09375 18.9722 10.3586 19.5462 11.1669 18.839L17.4775 13.3172C18.2744 12.6199 18.2744 11.3804 17.4775 10.6831L11.1669 5.16132C10.3587 4.45412 9.09375 5.02809 9.09375 6.10204V17.8983Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretRightFilled
