import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNorthKorea = ({
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
    <g clipPath="url(#clip0_3366_15029)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M10 0C6.9691 0 4.25336 1.34859 2.41949 3.47824H17.5805C15.7466 1.34859 13.0309 0 10 0Z"
        fill="#0052B4"
      />
      <path
        d="M17.5805 16.5217H2.41949C4.25336 18.6514 6.9691 20 10 20C13.0309 20 15.7466 18.6514 17.5805 16.5217Z"
        fill="#0052B4"
      />
      <path
        d="M18.5323 4.78271H1.46773C0.536914 6.30166 0 8.08811 0 10.0001C0 11.9121 0.536914 13.6986 1.46773 15.2175H18.5323C19.4631 13.6986 20 11.9121 20 10.0001C20 8.08811 19.4631 6.30166 18.5323 4.78271Z"
        fill="#D80027"
      />
      <path
        d="M6.15219 13.8477C8.27728 13.8477 10 12.125 10 9.99991C10 7.87482 8.27728 6.1521 6.15219 6.1521C4.02711 6.1521 2.30438 7.87482 2.30438 9.99991C2.30438 12.125 4.02711 13.8477 6.15219 13.8477Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.1522 6.1521L7.01552 8.80917H9.81388L7.54916 10.4514L8.41923 13.1164L6.1522 11.4664L3.88861 13.1133L4.75525 10.4514L2.49255 8.80917H5.28884L6.1522 6.1521Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15029">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconNorthKorea
