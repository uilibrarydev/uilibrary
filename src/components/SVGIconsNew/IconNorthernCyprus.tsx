import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNorthernCyprus = ({
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
    <g clipPath="url(#clip0_3366_15149)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.41945 3.47827C2.06855 3.88581 1.75 4.32187 1.46765 4.78261H18.5322C18.2498 4.32187 17.9313 3.88577 17.5804 3.47827H2.41945Z"
        fill="#D80027"
      />
      <path
        d="M2.41941 16.5219H17.5804C17.9313 16.1143 18.2498 15.6783 18.5322 15.2175H1.46765C1.74996 15.6782 2.06851 16.1143 2.41941 16.5219Z"
        fill="#D80027"
      />
      <path
        d="M8.72031 8.17139L9.54078 9.30205L10.8696 8.87119L10.0478 10.0009L10.8682 11.1315L9.53988 10.699L8.71813 11.8287L8.71895 10.4318L7.39062 9.99928L8.71945 9.56842L8.72031 8.17139Z"
        fill="#D80027"
      />
      <path
        d="M6.48097 12.8261C4.92019 12.8261 3.65487 11.5608 3.65487 10C3.65487 8.43923 4.92019 7.17392 6.48097 7.17392C6.96761 7.17392 7.42554 7.29696 7.8253 7.5136C7.19815 6.90028 6.34046 6.52173 5.39401 6.52173C3.473 6.52173 1.91577 8.07899 1.91577 9.99997C1.91577 11.9209 3.47304 13.4782 5.39401 13.4782C6.34046 13.4782 7.19815 13.0997 7.8253 12.4863C7.42554 12.7031 6.96765 12.8261 6.48097 12.8261Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15149">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconNorthernCyprus
