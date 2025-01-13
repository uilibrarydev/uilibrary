import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconJersey = ({
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
    <g clipPath="url(#clip0_3366_16194)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M17.9336 16.0888L11.8447 9.99996H11.8447L17.9336 3.91102C17.6709 3.56977 17.3837 3.24145 17.0711 2.92883C16.7585 2.61625 16.4302 2.32895 16.089 2.06641L10.0001 8.15527L10 8.15531L3.91118 2.06641C3.56997 2.32898 3.24161 2.61621 2.92899 2.92883C2.61637 3.24145 2.32911 3.56977 2.06657 3.91102L8.15543 9.99984L8.15547 9.99988L2.06653 16.0888C2.32915 16.4301 2.61641 16.7584 2.92895 17.071C3.24157 17.3836 3.56985 17.6709 3.91114 17.9334L10 11.8446L10.0001 11.8445L16.089 17.9334C16.4302 17.6708 16.7585 17.3836 17.0711 17.071C17.3838 16.7584 17.671 16.43 17.9336 16.0888Z"
        fill="#D80027"
      />
      <path
        d="M8.26086 3.04354L10 3.4783L11.7391 3.04354V1.56529L11.0435 1.91311L10 0.869629L8.95653 1.91311L8.26086 1.56529V3.04354Z"
        fill="#FFDA44"
      />
      <path
        d="M8.26086 3.04346V4.13049C8.26086 5.46174 10 5.86963 10 5.86963C10 5.86963 11.7391 5.4617 11.7391 4.13049V3.04346H8.26086Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16194">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconJersey
