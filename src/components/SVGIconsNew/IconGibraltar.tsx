import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconGibraltar = ({
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
    <g clipPath="url(#clip0_3366_15861)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F9F9F9"
      />
      <path
        d="M9.99999 20C14.2996 20 17.9651 17.2863 19.378 13.4783H0.621948C2.03492 17.2863 5.70031 20 9.99999 20Z"
        fill="#D80027"
      />
      <path
        d="M13.9131 8.26083V6.95649H14.3478V6.08692H13.4783V6.52173H12.6087V6.08692H11.7392V6.95649H12.1739V8.26083H11.3044V5.21743H11.7392V4.3479H10.8696V4.78259H10.4348V4.3479H9.56526V4.78259H9.13045V4.3479H8.26088V5.21743H8.69569V8.26083H7.82612V6.95649H8.26088V6.08692H7.39131V6.52173H6.52178V6.08692H5.65221V6.95649H6.08698V8.26083H5.21741V11.7391H14.7826V8.26083H13.9131Z"
        fill="#D80027"
      />
      <path
        d="M9.99997 11.3044C9.27961 11.3044 8.69563 11.8884 8.69563 12.6088C8.69563 13.1766 9.05868 13.6596 9.5652 13.8386V15.6523H8.26086V17.3914H10.4348V13.8387C10.9413 13.6596 11.3043 13.1767 11.3043 12.6088C11.3043 11.8885 10.7203 11.3044 9.99997 11.3044ZM9.99997 13.0436C9.75985 13.0436 9.5652 12.8489 9.5652 12.6088C9.5652 12.3687 9.75985 12.1741 9.99997 12.1741C10.2401 12.1741 10.4347 12.3687 10.4347 12.6088C10.4347 12.8489 10.2401 13.0436 9.99997 13.0436Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15861">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconGibraltar
