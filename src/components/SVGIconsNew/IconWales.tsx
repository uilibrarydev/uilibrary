import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconWales = ({
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
    <g clipPath="url(#clip0_3366_16492)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10" fill="#496E2D" />
      <path
        d="M17.3052 6.95882C16.9476 5.94464 15.9813 5.21753 14.8448 5.21753H12.6087C11.168 5.21753 10 6.3855 10 7.82624C10 8.29694 10.1253 8.74933 10.3434 9.13058C9.51305 9.12378 8.74457 9.13632 8.26086 9.13058C8.26086 8.12448 8.26086 6.84284 8.26086 6.57468L8.36359 6.47194C8.82476 6.01077 8.67098 5.24218 8.67098 5.24218C8.67098 5.24218 7.90246 5.08847 7.44129 5.54964L6.90383 6.0871H6.30434C4.98363 6.0871 3.91305 7.15773 3.91305 8.47839H5.65219V10.4349C5.65219 10.7211 5.70988 10.9937 5.81414 11.242L5.21738 11.7392H4.34781V10.8697H3.47824V12.6088H7.39129V14.348H6.52172V15.2175H8.26086V13.4784L9.05793 12.5219H10.942L11.7391 13.4784V14.348H10.8695V15.2175H14.3478V10.4349C14.3478 9.71452 14.9318 9.13054 15.6521 9.13054C15.6706 9.13054 15.689 9.1312 15.7073 9.13194C15.6713 8.99257 15.6521 8.84644 15.6521 8.69577C15.6522 7.76417 16.3847 7.0037 17.3052 6.95882ZM12.6087 14.3479V12.5218H12.6812L13.4782 13.4783V14.3479H12.6087Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16492">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconWales
