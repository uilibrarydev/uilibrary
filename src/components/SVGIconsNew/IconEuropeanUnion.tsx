import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconEuropeanUnion = ({
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
    <g clipPath="url(#clip0_3366_15592)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#0052B4"
      />
      <path
        d="M10 3.91309L10.3238 4.90953H11.3715L10.5239 5.52535L10.8476 6.5218L10 5.90594L9.15237 6.5218L9.47616 5.52535L8.62854 4.90953H9.67624L10 3.91309Z"
        fill="#FFDA44"
      />
      <path
        d="M5.69584 5.69582L6.62944 6.17145L7.37026 5.43066L7.20631 6.46543L8.13987 6.94109L7.10506 7.105L6.94116 8.13984L6.46549 7.20629L5.43073 7.37023L6.17155 6.62941L5.69584 5.69582Z"
        fill="#FFDA44"
      />
      <path
        d="M3.91309 10.0001L4.90953 9.67636V8.62866L5.52531 9.47632L6.5218 9.15253L5.9059 10.0001L6.5218 10.8478L5.52531 10.524L4.90953 11.3716V10.3239L3.91309 10.0001Z"
        fill="#FFDA44"
      />
      <path
        d="M5.69584 14.3041L6.17151 13.3705L5.43073 12.6297L6.46553 12.7937L6.94112 11.8601L7.10506 12.8949L8.13983 13.0588L7.20639 13.5345L7.37026 14.5692L6.62944 13.8284L5.69584 14.3041Z"
        fill="#FFDA44"
      />
      <path
        d="M10 16.0869L9.6762 15.0905H8.62854L9.4762 14.4746L9.15237 13.4783L10 14.0941L10.8476 13.4783L10.5239 14.4746L11.3715 15.0905H10.3238L10 16.0869Z"
        fill="#FFDA44"
      />
      <path
        d="M14.3042 14.3041L13.3706 13.8285L12.6298 14.5693L12.7937 13.5344L11.8602 13.0588L12.895 12.8949L13.0589 11.8601L13.5345 12.7937L14.5693 12.6297L13.8285 13.3706L14.3042 14.3041Z"
        fill="#FFDA44"
      />
      <path
        d="M16.087 10.0001L15.0905 10.3239V11.3716L14.4747 10.524L13.4783 10.8478L14.0942 10.0001L13.4783 9.15253L14.4747 9.47632L15.0905 8.62866V9.6764L16.087 10.0001Z"
        fill="#FFDA44"
      />
      <path
        d="M14.3042 5.69578L13.8285 6.62938L14.5693 7.3702L13.5345 7.20621L13.0589 8.13977L12.895 7.10496L11.8602 6.94102L12.7937 6.46539L12.6298 5.43066L13.3707 6.17145L14.3042 5.69578Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15592">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconEuropeanUnion
