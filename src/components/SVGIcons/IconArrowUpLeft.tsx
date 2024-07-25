import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowUpLeft = ({
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
      d="M13.2456 3C13.6598 3 13.9956 3.33579 13.9956 3.75C13.9956 4.16421 13.6598 4.5 13.2456 4.5H5.5765L20.7763 19.6998C21.0748 19.9983 21.0748 20.4824 20.7763 20.781C20.4777 21.0796 19.9936 21.0796 19.695 20.781L4.49561 5.58158V13.25C4.49561 13.6642 4.15982 14 3.74561 14C3.33139 14 2.99561 13.6642 2.99561 13.25V3.75C2.99561 3.33579 3.33139 3 3.74561 3H13.2456Z"
      fill="#222222"
    />
  </svg>
)

export default IconArrowUpLeft
