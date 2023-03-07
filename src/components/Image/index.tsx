import React from 'react'
import { ImagePropTypes } from './types'
import './index.scss'

const Image = (props: ImagePropTypes): JSX.Element => {
  const {
    name,
    imagePath = 'static/media/src/assets/images/image-placeholder.png',
    isBackgroundImage,
    backgroundSize,
    className = '',
    isFullWidth,
    isFullHeight,
    ratio
  } = props

  return isBackgroundImage ? (
    <div
      className={`image image--bg ${className}`}
      style={{
        backgroundImage: `${imagePath ? `url(${imagePath})` : ''}`,
        backgroundSize: backgroundSize,
        aspectRatio: ratio
      }}
    />
  ) : (
    <img
      className={`image ${className}`}
      src={imagePath}
      alt={name}
      style={{
        aspectRatio: ratio,
        width: isFullWidth ? '100%' : '',
        height: isFullHeight ? '100%' : ''
      }}
    />
  )
}

export default Image
