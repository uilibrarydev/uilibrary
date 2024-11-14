import type { ReactElement } from 'react';
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronUpDown = ({
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
    <g id="Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M13.0094 2.23017C12.868 2.08311 12.6728 2 12.4688 2C12.2647 2 12.0695 2.08311 11.9281 2.23017L5.67813 8.73017C5.39103 9.02875 5.40034 9.50353 5.69892 9.79062C5.9975 10.0777 6.47228 10.0684 6.75938 9.76983L12.4688 3.83208L18.1781 9.76983C18.4652 10.0684 18.94 10.0777 19.2386 9.79062C19.5372 9.50353 19.5465 9.02875 19.2594 8.73017L13.0094 2.23017ZM13.0094 21.7698C12.868 21.9169 12.6728 22 12.4688 22C12.2647 22 12.0695 21.9169 11.9281 21.7698L5.67813 15.2698C5.39103 14.9713 5.40034 14.4965 5.69892 14.2094C5.9975 13.9223 6.47228 13.9316 6.75938 14.2302L12.4688 20.1679L18.1781 14.2302C18.4652 13.9316 18.94 13.9223 19.2386 14.2094C19.5372 14.4965 19.5465 14.9713 19.2594 15.2698L13.0094 21.7698Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconChevronUpDown
