import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBosniaAndHerzegovina = ({
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
    <g clipPath="url(#clip0_3366_14832)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.99999 0C6.45429 0 3.33983 1.84543 1.56421 4.62809L15.1251 18.5879C18.0448 16.8417 20 13.6493 20 10C20 4.47719 15.5228 0 9.99999 0Z"
        fill="#FFDA44"
      />
      <path
        d="M20 10.0001C20 7.40551 19.0118 5.04191 17.3913 3.26465V16.7356C19.0118 14.9583 20 12.5947 20 10.0001Z"
        fill="#0052B4"
      />
      <path
        d="M12.4918 18.8233L13.5392 18.8227L13.8623 17.8262L14.1866 18.8223L14.712 18.822C15.0342 18.6495 15.3458 18.46 15.6456 18.2544L1.74566 4.35449C1.5166 4.68871 1.3077 5.03769 1.11984 5.39941L1.24336 5.77879L2.29082 5.77813L1.44379 6.39434L1.76809 7.39039L0.920273 6.77523L0.414609 7.14305C0.145039 8.04836 0 9.0073 0 10.0002C0 15.523 4.47719 20.0002 10 20.0002C11.1677 20.0002 12.2884 19.7997 13.3301 19.4317L12.4918 18.8233ZM2.23043 9.56539L2.55348 8.56898L1.70574 7.95375L2.7532 7.95309L3.07629 6.95664L3.40059 7.9527L4.44805 7.95203L3.60098 8.56824L3.92527 9.5643L3.07746 8.94914L2.23043 9.56539ZM4.38766 11.7393L4.7107 10.7429L3.86297 10.1277L4.91043 10.127L5.23352 9.13055L5.55781 10.1266L6.60527 10.1259L5.75824 10.7421L6.08254 11.7382L5.23473 11.123L4.38766 11.7393ZM6.54484 13.9132L6.86789 12.9168L6.02016 12.3016L7.06762 12.3009L7.3907 11.3045L7.715 12.3005L8.76246 12.2998L7.91543 12.9161L8.23973 13.9121L7.39191 13.2969L6.54484 13.9132ZM9.5491 15.4709L8.70203 16.0871L9.02508 15.0907L8.17734 14.4755L9.2248 14.4748L9.54793 13.4784L9.87223 14.4744L10.9197 14.4737L10.0727 15.09L10.397 16.086L9.5491 15.4709ZM10.8593 18.261L11.1823 17.2646L10.3346 16.6494L11.382 16.6487L11.7051 15.6523L12.0294 16.6483L13.0769 16.6477L12.2298 17.2639L12.5541 18.2599L11.7063 17.6447L10.8593 18.261Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14832">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBosniaAndHerzegovina
