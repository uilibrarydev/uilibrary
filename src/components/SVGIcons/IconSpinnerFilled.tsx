import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSpinnerFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M12.0004 4.1999C7.69257 4.1999 4.20039 7.69208 4.20039 11.9999C4.20039 12.497 3.79745 12.8999 3.30039 12.8999C2.80333 12.8999 2.40039 12.497 2.40039 11.9999C2.40039 6.69797 6.69846 2.3999 12.0004 2.3999C17.3023 2.3999 21.6004 6.69797 21.6004 11.9999C21.6004 17.3018 17.3023 21.5999 12.0004 21.5999C11.5033 21.5999 11.1004 21.197 11.1004 20.6999C11.1004 20.2028 11.5033 19.7999 12.0004 19.7999C16.3082 19.7999 19.8004 16.3077 19.8004 11.9999C19.8004 7.69208 16.3082 4.1999 12.0004 4.1999Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconSpinnerFilled
