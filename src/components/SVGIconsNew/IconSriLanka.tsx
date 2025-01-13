import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSriLanka = ({
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
    <g clipPath="url(#clip0_3366_15936)">
      <path d="M4.68751e-05 1.73926H0V18.261H4.68751e-05V10.0002V1.73926Z" fill="#FF9811" />
      <path
        d="M9.99998 20C15.5228 20 20 15.5228 20 9.99998C20 4.47714 15.5228 0 9.99998 0C4.47714 0 0 4.47714 0 9.99998C0 15.5228 4.47714 20 9.99998 20Z"
        fill="#FFDA44"
      />
      <path
        d="M7.82614 1.73926H4.36383C4.2104 1.84414 4.06024 1.95332 3.91309 2.06633L3.04352 10.0001L3.91309 17.9339C4.06024 18.0469 4.2104 18.1561 4.36383 18.2609H7.82614V1.73926Z"
        fill="#FF9811"
      />
      <path
        d="M3.05176e-05 9.99997C3.05176e-05 13.2322 1.53394 16.1057 3.91309 17.9337V2.06616C1.53394 3.89421 3.05176e-05 6.76773 3.05176e-05 9.99997Z"
        fill="#6DA544"
      />
      <path d="M16.087 6.09619V6.34639L16.0963 6.34779L16.087 6.09619Z" fill="#FFDA44" />
      <path
        d="M19.203 12.6088H17.3189L16.5218 13.4784V15.2175H14.7827V14.348H15.6522V12.6088H11.7392V13.6958H10.8696V11.6242C10.6028 11.3854 10.4348 11.0385 10.4348 10.6523V5.00012C10.4348 4.27977 11.0188 3.69579 11.7392 3.69579V11.7393H13.4783L14.075 11.242C13.9708 10.9937 13.9131 10.7211 13.9131 10.4349V9.1306H12.6087V6.52192H15.2174C15.2174 6.08716 15.8696 5.65235 15.8696 5.65235C15.8696 5.65235 16.5218 6.08712 16.5218 6.52192V7.17411V9.13064C17.0055 9.13638 17.774 9.12384 18.6043 9.13064C18.3862 8.74939 18.2609 8.29701 18.2609 7.8263C18.2609 7.05907 18.5922 6.36931 19.1194 5.89196C18.3594 4.20778 17.1467 2.77176 15.6362 1.73926H9.13049V18.261H15.6363C17.473 17.0055 18.8694 15.1535 19.5469 12.984L19.203 12.6088Z"
        fill="#A2001D"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15936">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSriLanka
