import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSlovenia = ({
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
    <g clipPath="url(#clip0_3366_15786)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M19.378 6.5218H8.69566V3.91309H3.47824V6.5218H0.621992C0.220039 7.60508 0 8.77683 0 10C0 11.2232 0.220039 12.395 0.621992 13.4783L10 14.3478L19.378 13.4783C19.78 12.395 20 11.2232 20 10C20 8.77683 19.78 7.60508 19.378 6.5218Z"
        fill="#0052B4"
      />
      <path
        d="M10 20C14.2997 20 17.9651 17.2863 19.378 13.4783H0.622009C2.03494 17.2863 5.70037 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M3.47827 6.52168V7.39121C3.47827 9.38812 6.08698 9.99996 6.08698 9.99996C6.08698 9.99996 8.69569 9.38812 8.69569 7.39121V6.52168L7.82612 7.39125L6.08698 6.08691L4.34784 7.39125L3.47827 6.52168Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15786">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSlovenia
