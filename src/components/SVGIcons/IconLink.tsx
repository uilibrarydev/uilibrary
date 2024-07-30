import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconLink = ({
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
        d="M9.25 7C9.66421 7 10 7.33579 10 7.75C10 8.12656 9.72249 8.4383 9.36083 8.49187L9.25 8.5H7C5.067 8.5 3.5 10.067 3.5 12C3.5 13.864 4.95707 15.3876 6.79435 15.4941L7 15.5H9.25C9.66421 15.5 10 15.8358 10 16.25C10 16.6266 9.72249 16.9383 9.36083 16.9919L9.25 17H7C4.23858 17 2 14.7614 2 12C2 9.32226 4.10496 7.13615 6.75045 7.00612L7 7H9.25ZM17 7C19.7614 7 22 9.23858 22 12C22 14.6777 19.895 16.8638 17.2495 16.9939L17 17H14.75C14.3358 17 14 16.6642 14 16.25C14 15.8734 14.2775 15.5617 14.6392 15.5081L14.75 15.5H17C18.933 15.5 20.5 13.933 20.5 12C20.5 10.136 19.0429 8.6124 17.2057 8.50594L17 8.5H14.75C14.3358 8.5 14 8.16421 14 7.75C14 7.37344 14.2775 7.0617 14.6392 7.00813L14.75 7H17ZM7 11.25H17C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.3797 17.4678 12.6935 17.1018 12.7432L17 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12C6.25 11.6203 6.53215 11.3065 6.89823 11.2568L7 11.25H17H7Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconLink
