import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNamibia = ({
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
    <g clipPath="url(#clip0_3366_14807)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.92896 17.0712C3.34845 17.4907 3.79603 17.8648 4.26552 18.1942L18.194 4.26564C17.8647 3.79615 17.4906 3.34857 17.071 2.92908C16.6515 2.50959 16.204 2.13553 15.7345 1.80615L1.80603 15.7347C2.13537 16.2041 2.50947 16.6517 2.92896 17.0712Z"
        fill="#A2001D"
      />
      <path
        d="M2.92899 2.92896C-0.225849 6.0838 -0.831475 10.8218 1.11083 14.5851L14.5851 1.11087C10.8218 -0.83143 6.08376 -0.225727 2.92899 2.92896Z"
        fill="#0052B4"
      />
      <path
        d="M17.071 17.0712C20.2258 13.9164 20.8314 9.17844 18.8892 5.41504L5.41492 18.8893C9.17824 20.8316 13.9162 20.226 17.071 17.0712Z"
        fill="#496E2D"
      />
      <path
        d="M8.26085 5.65217L7.14031 6.17924L7.73703 7.26447L6.52027 7.03174L6.36605 8.26084L5.51855 7.35682L4.67101 8.26084L4.51687 7.03174L3.30007 7.26443L3.89675 6.1792L2.77625 5.65217L3.89679 5.12506L3.30007 4.0399L4.51683 4.27264L4.67105 3.04346L5.51855 3.94752L6.36609 3.04346L6.52027 4.27264L7.73703 4.0399L7.14039 5.1251L8.26085 5.65217Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14807">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconNamibia
