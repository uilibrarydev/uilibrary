import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAlbania = ({
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
    <g clipPath="url(#clip0_3366_14391)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#D80027"
      />
      <path
        d="M15.6522 7.42233H12.0301C12.2537 7.18819 12.3913 6.8712 12.3913 6.52187C12.3913 5.80151 11.8073 5.21753 11.0869 5.21753C10.6331 5.21753 10.2336 5.4494 9.99999 5.80101C9.76636 5.4494 9.36682 5.21753 8.91303 5.21753C8.19268 5.21753 7.6087 5.80151 7.6087 6.52187C7.6087 6.8712 7.74632 7.18823 7.96991 7.42233H4.34784C4.34784 8.38284 5.18444 9.16144 6.14487 9.16144H6.0869C6.0869 10.122 6.86554 10.9006 7.82608 10.9006C7.82608 11.2117 7.90807 11.5033 8.0512 11.7558L6.60862 13.1985L7.71542 14.3052L9.28542 12.7352C9.3469 12.7578 9.41053 12.7758 9.47624 12.7882L8.52753 14.9301L9.99999 16.5219L11.4724 14.9301L10.5237 12.7881C10.5895 12.7758 10.6531 12.7577 10.7146 12.7351L12.2846 14.3051L13.3914 13.1983L11.9487 11.7557C12.0919 11.5033 12.1739 11.2116 12.1739 10.9005C13.1344 10.9005 13.913 10.1219 13.913 9.16132H13.8551C14.8155 9.1614 15.6522 8.38284 15.6522 7.42233Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14391">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconAlbania
