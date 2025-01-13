import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMarshallIsland = ({
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
    <g clipPath="url(#clip0_3366_14611)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 8.32176 19.5859 6.74039 18.8554 5.35156L9.98824 10.0117L14.6484 1.14461C13.2596 0.414062 11.6782 0 10 0C4.47719 0 0 4.47719 0 10C0 12.7614 1.1193 15.2614 2.92891 17.0711C4.73855 18.8807 7.23855 20 10 20Z"
        fill="#0052B4"
      />
      <path
        d="M18.8449 5.3625C18.3871 4.49125 17.792 3.67324 17.0594 2.94066C16.3268 2.20809 15.5089 1.61297 14.6376 1.15527L2.91724 17.0828L18.8449 5.3625Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.91724 17.0828L18.8449 5.36251C18.3871 4.49126 17.792 3.67325 17.0594 2.94067L2.91724 17.0828Z"
        fill="#FF9811"
      />
      <path
        d="M8.68391 5.86403L7.46266 6.43849L8.11301 7.6213L6.78684 7.36759L6.61879 8.70727L5.69504 7.72192L4.77129 8.70727L4.60333 7.36759L3.27715 7.62122L3.92743 6.43845L2.70618 5.86403L3.92747 5.28954L3.27715 4.10681L4.60325 4.36044L4.77133 3.02075L5.69504 4.0061L6.61879 3.02075L6.78684 4.36044L8.11305 4.10681L7.4627 5.28958L8.68391 5.86403Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14611">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconMarshallIsland
