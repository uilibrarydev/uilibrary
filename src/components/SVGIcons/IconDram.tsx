import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDram = ({
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
      d="M13.4984 17.4847V13.6968H15.7711V12.1817H13.4984V10.6665H15.7711V9.15135H13.4984V8.39377C13.4984 4.6059 11.7871 2.33317 8.66545 2.33317C5.54384 2.33317 3.6499 4.6059 3.6499 8.39377C4.15495 8.39377 4.66 8.39377 5.16505 8.39377C5.16505 5.74226 6.30142 3.84832 8.57414 3.84832C11.1724 3.84832 11.9832 6.12105 11.9832 8.39377C11.9832 9.90893 11.9832 10.1615 11.9832 9.15135H9.33172V10.6665H11.9832V12.1817H9.33172V13.6968H11.9832V17.4847H13.4984Z"
      fill="#222222"
    />
  </svg>
)

export default IconDram
