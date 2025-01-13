import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSintMaarten = ({
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
    <g clipPath="url(#clip0_3366_15768)">
      <path
        d="M9.13042 10.8696C9.13042 10.8696 2.93475 2.92754 2.92889 2.92895C4.7385 1.1193 7.23854 0 9.99999 0C15.5228 0 20 4.47719 20 10L9.13042 10.8696Z"
        fill="#D80027"
      />
      <path
        d="M9.13042 10C9.13042 10 2.93475 17.0725 2.92889 17.0711C4.7385 18.8807 7.23854 20 9.99999 20C15.5228 20 20 15.5228 20 10H9.13042Z"
        fill="#0052B4"
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        fill="#F0F0F0"
      />
      <path
        d="M1.09615 10C1.09069 10.0718 1.08698 10.1441 1.08698 10.2173C1.08698 11.7781 2.35229 13.0434 3.91307 13.0434C5.47385 13.0434 6.73916 11.7781 6.73916 10.2173C6.73916 10.1441 6.73545 10.0718 6.72998 10H1.09615Z"
        fill="#FFDA44"
      />
      <path
        d="M3.91309 8.69568C4.39334 8.69568 4.78266 8.30636 4.78266 7.82611C4.78266 7.34586 4.39334 6.95654 3.91309 6.95654C3.43284 6.95654 3.04352 7.34586 3.04352 7.82611C3.04352 8.30636 3.43284 8.69568 3.91309 8.69568Z"
        fill="#FFDA44"
      />
      <path
        d="M1.95654 7.60864V10.4347C1.95654 11.9324 3.91307 12.3913 3.91307 12.3913C3.91307 12.3913 5.86959 11.9324 5.86959 10.4347V7.60864H1.95654Z"
        fill="#D80027"
      />
      <path
        d="M3.91398 11.4813C3.55101 11.3507 2.82605 11.0168 2.82605 10.4348V8.47827H5V10.4348C5 11.0187 4.27511 11.3517 3.91398 11.4813Z"
        fill="#338AF3"
      />
      <path
        d="M4.34782 9.56527V9.13047L3.91305 8.91309L3.47825 9.13047V9.56527L3.26086 9.78266V10.6522H4.56524V9.78266L4.34782 9.56527Z"
        fill="#F3F3F3"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15768">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSintMaarten
