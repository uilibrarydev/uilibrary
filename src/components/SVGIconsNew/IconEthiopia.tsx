import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconEthiopia = ({
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
    <g clipPath="url(#clip0_3366_15584)">
      <path
        d="M0 9.99991C0 11.2232 0.220039 12.3949 0.622031 13.4783L10 14.3477L19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99991C20 8.79347 19.7863 7.63694 19.3948 6.56612L10 5.6521L0.605234 6.56616C0.213711 7.63694 0 8.79347 0 9.99991H0Z"
        fill="#FFDA44"
      />
      <path
        d="M10 20C14.2997 20 17.9651 17.2863 19.378 13.4783H0.622009C2.03494 17.2863 5.70037 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M10 0C5.70037 0 2.03494 2.71375 0.622009 6.52176H19.3781C17.9651 2.71375 14.2997 0 10 0Z"
        fill="#6DA544"
      />
      <path
        d="M10 14.7825C12.6414 14.7825 14.7826 12.6413 14.7826 9.9999C14.7826 7.35854 12.6414 5.21729 10 5.21729C7.35866 5.21729 5.21741 7.35854 5.21741 9.9999C5.21741 12.6413 7.35866 14.7825 10 14.7825Z"
        fill="#0052B4"
      />
      <path
        d="M9.999 6.29663L10.8624 8.95374H13.6607L11.3959 10.596L12.2661 13.261L9.999 11.6109L7.73541 13.2579L8.60205 10.596L6.33936 8.95374H9.13564L9.999 6.29663Z"
        fill="#FFDA44"
      />
      <path
        d="M13.4424 10.6615L10.7035 9.77152L12.3962 7.44184L11.6927 6.93066L9.99994 9.26051L8.30733 6.9307L7.60381 7.4418L9.29647 9.77168L6.55768 10.6615L6.82635 11.4886L9.56526 10.5987V13.4784H10.4348V10.5986L13.1736 11.4886L13.4424 10.6615Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15584">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconEthiopia
