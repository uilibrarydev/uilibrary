import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconVaticanCity = ({
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
    <g clipPath="url(#clip0_3366_16458)">
      <path
        d="M10 0C15.5228 0 20 4.47719 20 10C20 15.5228 15.5228 20 10 20C10 19.5652 8.69566 10 8.69566 10L10 0Z"
        fill="#F0F0F0"
      />
      <path d="M10 20C4.47719 20 0 15.5228 0 10C0 4.47719 4.47719 0 10 0" fill="#FFDA44" />
      <path
        d="M13.8293 8.70167L15.7086 11.1878C15.4125 11.6362 15.4141 12.2403 15.7566 12.6933C16.1909 13.2679 17.0089 13.3817 17.5836 12.9473C18.1583 12.5129 18.272 11.6949 17.8376 11.1202C17.4952 10.6672 16.9144 10.501 16.4023 10.6635L13.4734 6.78882L12.7797 7.31319L11.7391 8.09968L12.7878 9.48698L13.8293 8.70167ZM16.5349 11.5599C16.7264 11.415 16.9991 11.453 17.1439 11.6445C17.2887 11.836 17.2509 12.1087 17.0593 12.2536C16.8678 12.3983 16.5951 12.3605 16.4503 12.1689C16.3054 11.9773 16.3434 11.7046 16.5349 11.5599Z"
        fill="#ACABB1"
      />
      <path
        d="M17.0527 9.48706L18.1015 8.09976L17.0609 7.31319L16.3673 6.78882L13.4383 10.6635C12.9263 10.501 12.3455 10.6673 12.003 11.1202C11.5686 11.6949 11.6823 12.5129 12.257 12.9473C12.8317 13.3816 13.6496 13.2679 14.084 12.6933C14.4264 12.2403 14.428 11.6362 14.1319 11.1878L16.0113 8.70167L17.0527 9.48706ZM13.3903 12.169C13.2456 12.3606 12.9729 12.3984 12.7814 12.2537C12.5898 12.1088 12.5519 11.8361 12.6967 11.6446C12.8415 11.4531 13.1142 11.4151 13.3058 11.56C13.4973 11.7048 13.5352 11.9775 13.3903 12.169Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_16458">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconVaticanCity
