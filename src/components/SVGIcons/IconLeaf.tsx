import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconLeaf = ({
  size,
  type,
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
      [`svg-icon__type-${type}`]: type,
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M13.2376 3.27233C12.5542 2.58891 11.4461 2.58891 10.7627 3.27233L7.05133 6.98371C4.31818 9.71686 4.31817 14.1482 7.05133 16.8813C8.22687 18.0569 9.71655 18.7268 11.2501 18.8911V21.2496C11.2501 21.6638 11.5859 21.9996 12.0001 21.9996C12.4144 21.9996 12.7501 21.6638 12.7501 21.2496V18.8911C14.2837 18.7268 15.7734 18.0569 16.949 16.8813C19.6821 14.1482 19.6821 9.71686 16.949 6.98371L13.2376 3.27233ZM12.7501 17.3801V11.7496C12.7501 11.3354 12.4144 10.9996 12.0001 10.9996C11.5859 10.9996 11.2501 11.3354 11.2501 11.7496V17.3801C10.1022 17.223 8.99445 16.7031 8.11199 15.8207C5.96462 13.6733 5.96462 10.1917 8.11199 8.04437L11.8234 4.33299C11.921 4.23536 12.0793 4.23536 12.1769 4.33299L15.8883 8.04437C18.0357 10.1917 18.0357 13.6733 15.8883 15.8207C15.0058 16.7031 13.8981 17.223 12.7501 17.3801Z"
      fill="#222222"
    />
  </svg>
)

export default IconLeaf
