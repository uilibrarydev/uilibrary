import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTrinidadAndTobago = ({
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
    <g clipPath="url(#clip0_3366_16150)">
      <path
        d="M5.41467 1.11035C4.51944 1.57242 3.67908 2.17809 2.92862 2.92855C2.17811 3.67906 1.57244 4.51941 1.11041 5.41465L7.54037 12.4595L14.5853 18.8895C15.4805 18.4274 16.3209 17.8218 17.0714 17.0713C17.8219 16.3208 18.4275 15.4805 18.8896 14.5852L12.4596 7.54031L5.41467 1.11035Z"
        fill="#F0F0F0"
      />
      <path
        d="M17.0714 17.0714C17.4909 16.6519 17.865 16.2043 18.1944 15.7348L4.26527 1.80566C3.79578 2.135 3.34816 2.50914 2.92867 2.92863C2.50918 3.34812 2.13504 3.79574 1.80566 4.26527L15.7348 18.1943C16.2042 17.865 16.6519 17.4909 17.0714 17.0714Z"
        fill="black"
      />
      <path
        d="M2.92859 17.0712C6.08355 20.2262 10.8217 20.8318 14.5852 18.8894L1.11043 5.41455C-0.831956 9.17807 -0.226214 13.9163 2.92859 17.0712Z"
        fill="#D80027"
      />
      <path
        d="M17.0714 2.92864C13.9164 -0.226281 9.17825 -0.831906 5.41473 1.1104L18.8895 14.5853C20.832 10.8218 20.2263 6.08356 17.0714 2.92864Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16150">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconTrinidadAndTobago
