import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCocosIsland = ({
  size,
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
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <g clipPath="url(#clip0_3366_15239)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#6DA544"
      />
      <path
        d="M15.351 14.3479L15.6254 14.9217L16.2451 14.7785L15.9676 15.3508L16.4659 15.7459L15.8454 15.8858L15.8472 16.5218L15.351 16.1239L14.8548 16.5218L14.8565 15.8858L14.2361 15.7459L14.7344 15.3508L14.4569 14.7785L15.0766 14.9217L15.351 14.3479Z"
        fill="#FFDA44"
      />
      <path
        d="M12.7981 8.26074L13.0726 8.83453L13.6923 8.69129L13.4147 9.26363L13.913 9.65879L13.2926 9.79863L13.2943 10.4346L12.7981 10.0368L12.3019 10.4346L12.3036 9.79863L11.6832 9.65879L12.1815 9.26363L11.904 8.69129L12.5237 8.83453L12.7981 8.26074Z"
        fill="#FFDA44"
      />
      <path
        d="M15.3509 4.78271L15.6253 5.3565L16.245 5.21322L15.9676 5.78557L16.4658 6.18076L15.8454 6.32057L15.8471 6.95662L15.3509 6.55869L14.8548 6.95662L14.8565 6.32057L14.2361 6.18076L14.7344 5.78557L14.4569 5.21322L15.0765 5.3565L15.3509 4.78271Z"
        fill="#FFDA44"
      />
      <path
        d="M17.5808 7.39136L17.8552 7.96515L18.4749 7.8219L18.1974 8.39425L18.6957 8.7894L18.0753 8.92925L18.077 9.5653L17.5808 9.16737L17.0846 9.5653L17.0863 8.92925L16.4659 8.7894L16.9642 8.39425L16.6867 7.8219L17.3063 7.96515L17.5808 7.39136Z"
        fill="#FFDA44"
      />
      <path
        d="M15.9863 10.4348L16.2022 11.0991H16.9007L16.3356 11.5097L16.5515 12.174L15.9863 11.7634L15.4213 12.174L15.6371 11.5097L15.072 11.0991H15.7705L15.9863 10.4348Z"
        fill="#FFDA44"
      />
      <path
        d="M11.087 12.8261C9.52614 12.8261 8.26083 11.5608 8.26083 10C8.26083 8.43923 9.5261 7.17392 11.087 7.17392C11.5736 7.17392 12.0315 7.297 12.4313 7.5136C11.8042 6.90024 10.9465 6.52173 9.99993 6.52173C8.07899 6.52173 6.52173 8.07899 6.52173 9.99997C6.52173 11.9209 8.07899 13.4782 9.99993 13.4782C10.9465 13.4782 11.8042 13.0997 12.4313 12.4863C12.0315 12.703 11.5736 12.8261 11.087 12.8261Z"
        fill="#FFDA44"
      />
      <path
        d="M6.28853 3.91303C5.98775 3.39334 5.42623 3.04346 4.78263 3.04346C4.13904 3.04346 3.57751 3.39334 3.27673 3.91303H6.28853Z"
        fill="#FFDA44"
      />
      <path
        d="M6.2943 3.9231L4.78262 5.43478L3.27094 3.9231C3.12645 4.17665 3.04352 4.46989 3.04352 4.78263C3.04352 5.74313 3.82215 6.52177 4.78266 6.52177C5.74317 6.52177 6.5218 5.74317 6.5218 4.78263C6.52176 4.46989 6.43879 4.17665 6.2943 3.9231Z"
        fill="#FFDA44"
      />
      <path
        d="M4.34784 5V6.46695C4.48678 6.5027 4.63249 6.52172 4.7826 6.52172C4.93272 6.52172 5.07843 6.50266 5.21737 6.46695V5H4.34784Z"
        fill="#A2001D"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15239">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconCocosIsland
