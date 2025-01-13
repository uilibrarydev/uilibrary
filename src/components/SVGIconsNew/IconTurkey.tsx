import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTurkey = ({
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
    <g clipPath="url(#clip0_3366_16211)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M9.59055 8.17139L10.4111 9.30205L11.7398 8.87119L10.9181 10.0009L11.7384 11.1315L10.4101 10.699L9.58836 11.8287L9.58922 10.4318L8.26086 9.99928L9.58969 9.56842L9.59055 8.17139Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.35133 12.8261C5.79055 12.8261 4.52523 11.5608 4.52523 10C4.52523 8.43923 5.79055 7.17392 7.35133 7.17392C7.83797 7.17392 8.29586 7.297 8.69562 7.5136C8.06848 6.90024 7.21078 6.52173 6.26437 6.52173C4.34336 6.52173 2.78613 8.07899 2.78613 9.99997C2.78613 11.9209 4.3434 13.4782 6.26437 13.4782C7.21086 13.4782 8.06852 13.0997 8.69562 12.4863C8.29586 12.703 7.83797 12.8261 7.35133 12.8261Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16211">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconTurkey
