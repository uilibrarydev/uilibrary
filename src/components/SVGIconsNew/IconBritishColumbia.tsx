import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBritishColumbia = ({
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
    <g clipPath="url(#clip0_3366_14851)">
      <path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10H0Z" fill="#F0F0F0" />
      <path d="M7.39128 9.45312L6.8446 9.9998H7.39128V9.45312Z" fill="#0052B4" />
      <path d="M12.6088 9.45337V10H13.1554L12.6088 9.45337Z" fill="#0052B4" />
      <path
        d="M0.288516 7.60864C0.10043 8.37489 0 9.17563 0 9.99989H3.15535L5.5466 7.60864H0.288516Z"
        fill="#0052B4"
      />
      <path
        d="M14.4534 7.60864L16.8446 9.99989H20C20 9.17563 19.8996 8.37489 19.7115 7.60864H14.4534Z"
        fill="#0052B4"
      />
      <path d="M13.8384 7.60864H12.6086L14.9999 9.99989H16.2297L13.8384 7.60864Z" fill="#D80027" />
      <path
        d="M7.39127 8.83829V7.60864H7.39119L4.99994 9.99989H6.2297L7.39127 8.83829Z"
        fill="#D80027"
      />
      <path
        d="M4.68443 1.52905C4.27224 1.78827 3.88032 2.07663 3.51154 2.39136H5.54669L4.68443 1.52905Z"
        fill="#0052B4"
      />
      <path
        d="M16.4884 2.39136C16.1197 2.07659 15.7278 1.78823 15.3156 1.52905L14.4534 2.39136H16.4884Z"
        fill="#0052B4"
      />
      <path
        d="M11.3043 6.30434H19.2946C18.9165 5.35438 18.3969 4.47633 17.762 3.69563H11.3044H11.3043V0.0846484C10.8774 0.0290625 10.4421 0 10 0C9.55787 0 9.12263 0.0290625 8.69568 0.0846484V3.69559V3.69563H2.23798C1.6031 4.47633 1.08349 5.35438 0.705444 6.30434H8.6956H8.69564V10H11.3043V6.30437V6.30434Z"
        fill="#D80027"
      />
      <path
        d="M7.39132 2.39137V2.39133L5.88378 0.883789C5.60507 1.00984 5.33343 1.14871 5.06909 1.29883L6.16163 2.39137H7.39132Z"
        fill="#D80027"
      />
      <path
        d="M12.6088 2.39129L14.1163 0.88375C13.8296 0.754102 13.5356 0.637852 13.2352 0.535156L12.6088 1.1616V2.39129Z"
        fill="#D80027"
      />
      <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10H20Z" fill="#F0F0F0" />
      <path
        d="M18.3332 11.2754C17.4999 11.2754 17.4999 10.5134 16.6665 10.5134C15.8332 10.5134 15.8332 11.2754 14.9999 11.2754C14.1666 11.2754 14.1666 10.5134 13.3333 10.5134C12.5 10.5134 12.5 11.2754 11.6666 11.2754C10.8333 11.2754 10.8332 10.5134 9.99984 10.5134C9.16652 10.5134 9.16652 11.2754 8.33324 11.2754C7.50003 11.2754 7.50003 10.5134 6.66671 10.5134C5.83331 10.5134 5.83331 11.2754 4.99992 11.2754C4.16652 11.2754 4.16652 10.5134 3.33312 10.5134C2.49991 10.5134 2.49991 11.2754 1.66659 11.2754C0.837766 11.2754 0.832961 10.5218 0.0130005 10.5138C0.0360864 10.9712 0.0906958 11.4203 0.173274 11.8594C0.837493 11.957 0.895657 12.6087 1.66663 12.6087C2.49995 12.6087 2.49995 11.8468 3.33316 11.8468C4.16656 11.8468 4.16656 12.6087 4.99995 12.6087C5.83335 12.6087 5.83335 11.8468 6.66675 11.8468C7.50007 11.8468 7.50007 12.6087 8.33327 12.6087C9.1666 12.6087 9.1666 11.8468 9.99988 11.8468C10.8333 11.8468 10.8333 12.6087 11.6667 12.6087C12.5001 12.6087 12.5001 11.8468 13.3334 11.8468C14.1667 11.8468 14.1667 12.6087 15 12.6087C15.8332 12.6087 15.8333 11.8468 16.6666 11.8468C17.5 11.8468 17.5 12.6087 18.3332 12.6087C19.1043 12.6087 19.1625 11.9571 19.8267 11.8594C19.9093 11.4203 19.9639 10.9712 19.9871 10.5138C19.1669 10.5219 19.1621 11.2754 18.3332 11.2754Z"
        fill="#0052B4"
      />
      <path
        d="M16.6665 13.1221C15.8332 13.1221 15.8332 13.884 14.9999 13.884C14.1666 13.884 14.1666 13.1221 13.3333 13.1221C12.5 13.1221 12.5 13.884 11.6666 13.884C10.8332 13.884 10.8332 13.1221 9.99981 13.1221C9.16649 13.1221 9.16649 13.884 8.33321 13.884C7.50001 13.884 7.50001 13.1221 6.66669 13.1221C5.83329 13.1221 5.83329 13.884 4.99989 13.884C4.16649 13.884 4.16649 13.1221 3.33309 13.1221C2.49989 13.1221 2.49989 13.884 1.66657 13.884C1.07114 13.884 0.901062 13.4951 0.548523 13.2729C0.78321 13.951 1.08852 14.5961 1.45622 15.199C1.52016 15.2108 1.58977 15.2173 1.66657 15.2173C2.49989 15.2173 2.49989 14.4555 3.33309 14.4555C4.16649 14.4555 4.16649 15.2173 4.99989 15.2173C5.83329 15.2173 5.83329 14.4555 6.66669 14.4555C7.50001 14.4555 7.50001 15.2173 8.33321 15.2173C9.16653 15.2173 9.16653 14.4555 9.99981 14.4555C10.8332 14.4555 10.8332 15.2173 11.6666 15.2173C12.5 15.2173 12.5 14.4555 13.3333 14.4555C14.1666 14.4555 14.1666 15.2173 14.9999 15.2173C15.8332 15.2173 15.8332 14.4555 16.6665 14.4555C17.4999 14.4555 17.4999 15.2173 18.3332 15.2173C18.41 15.2173 18.4797 15.2108 18.5436 15.199C18.9113 14.5961 19.2166 13.951 19.4514 13.273C19.0988 13.495 18.9287 13.884 18.3332 13.884C17.4999 13.884 17.4999 13.1221 16.6665 13.1221Z"
        fill="#0052B4"
      />
      <path
        d="M19.9946 9.68579C19.9955 9.71356 19.9965 9.74134 19.9971 9.76923C19.9965 9.74138 19.9954 9.71356 19.9946 9.68579Z"
        fill="#F0F0F0"
      />
      <path
        d="M0.00292969 9.76923C0.00359375 9.74138 0.00453125 9.7136 0.00539062 9.68579C0.00457031 9.7136 0.00355469 9.74142 0.00292969 9.76923Z"
        fill="#F0F0F0"
      />
      <path
        d="M0 10.0001C0 9.92292 0.00117188 9.84608 0.00292969 9.76929C0.00113281 9.84608 0 9.92292 0 10.0001Z"
        fill="#F0F0F0"
      />
      <path
        d="M0 10C0 10.1821 0.00515625 10.3631 0.0148828 10.5429C0.832969 10.552 0.838398 11.3043 1.66664 11.3043C2.49996 11.3043 2.49996 10.5425 3.33316 10.5425C4.16656 10.5425 4.16656 11.3043 4.99996 11.3043C5.83336 11.3043 5.83336 10.5425 6.66676 10.5425C7.50008 10.5425 7.50008 11.3043 8.33328 11.3043C9.1666 11.3043 9.1666 10.5425 9.99988 10.5425C10.8333 10.5425 10.8333 11.3043 11.6667 11.3043C12.5001 11.3043 12.5001 10.5425 13.3334 10.5425C14.1667 10.5425 14.1667 11.3043 15 11.3043C15.8332 11.3043 15.8333 10.5425 16.6666 10.5425C17.5 10.5425 17.5 11.3043 18.3332 11.3043C19.1616 11.3043 19.167 10.552 19.9852 10.5429C19.9948 10.3631 20 10.1821 20 10H0Z"
        fill="#F0F0F0"
      />
      <path
        d="M19.9971 9.76929C19.9988 9.84601 20 9.92288 20 10.0001C20 9.92292 19.9989 9.84608 19.9971 9.76929Z"
        fill="#F0F0F0"
      />
      <path
        d="M16.6665 15.7307C15.8332 15.7307 15.8332 16.4927 14.9999 16.4927C14.1667 16.4927 14.1666 15.7307 13.3333 15.7307C12.5 15.7307 12.5 16.4927 11.6667 16.4927C10.8333 16.4927 10.8333 15.7307 9.99986 15.7307C9.16654 15.7307 9.16654 16.4927 8.33325 16.4927C7.50005 16.4927 7.50005 15.7307 6.66673 15.7307C5.83333 15.7307 5.83333 16.4927 4.99993 16.4927C4.16654 16.4927 4.16654 15.7307 3.33314 15.7307C2.75759 15.7307 2.5795 16.0941 2.24982 16.319C3.12439 17.3904 4.21697 18.2765 5.45935 18.9109L10 18.6822L14.5406 18.9109C15.783 18.2764 16.8756 17.3904 17.7501 16.3191C17.4203 16.0942 17.2422 15.7307 16.6665 15.7307Z"
        fill="#0052B4"
      />
      <path
        d="M15.5462 15.9693L12.5042 16.5512L12.1188 13.4783L9.99999 15.7383L7.88124 13.4783L7.49569 16.5511L4.45386 15.9693L5.94562 18.6823L5.45843 18.9114C6.82124 19.6074 8.36472 20 9.99999 20C11.6353 20 13.1787 19.6074 14.5416 18.9115L14.0546 18.6824L15.5462 15.9693Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_14851">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconBritishColumbia
