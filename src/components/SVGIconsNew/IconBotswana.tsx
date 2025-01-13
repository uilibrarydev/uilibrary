import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBotswana = ({
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
    <g clipPath="url(#clip0_3366_14838)">
      <path
        d="M0.472249 6.95649C0.16592 7.91622 2.19796e-05 8.9386 6.10421e-05 9.99997C2.19796e-05 11.0613 0.16592 12.0837 0.472288 13.0434L10.0001 13.4783L19.5278 13.0434C19.8341 12.0837 20 11.0612 20 10C20 8.93868 19.8341 7.91622 19.5278 6.95649L10 6.52173L0.472249 6.95649Z"
        fill="#F0F0F0"
      />
      <path
        d="M20 9.99992C20 9.40668 19.948 8.82559 19.8489 8.26074H0.151094C0.0519531 8.82559 0 9.4066 0 9.99988C0 10.5932 0.0519922 11.1742 0.151094 11.739H19.8489C19.948 11.1741 20 10.5931 20 9.99992Z"
        fill="black"
      />
      <path
        d="M10.0001 20C14.4616 20 18.2401 17.078 19.5278 13.0435H0.47229C1.75999 17.078 5.53854 19.9999 10.0001 20Z"
        fill="#338AF3"
      />
      <path
        d="M10 1.56654e-09C5.53852 1.56654e-09 1.76 2.92199 0.472229 6.95644L19.5277 6.95648C18.2401 2.92199 14.4615 -7.81234e-05 10 1.56654e-09Z"
        fill="#338AF3"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14838">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBotswana
