import React from 'react'
import { TAvatarProps } from './types'
import '../../assets/styles/components/_avatar.scss'

export const Avatar = (props: TAvatarProps): JSX.Element | null => {
  const {
    type,
    size,
    imagePath,
    initials = 'AG',
    className = '',
    isEditable = false
  } = props

  return (
    <div className={`avatar avatar--${type} avatar--${size} ${className} 
         ${imagePath && 'avatar--image'}
         ${isEditable && 'avatar--edit'}
         `}
         style={{backgroundImage: `url(${imagePath})`}}>
      {!imagePath && initials}
    </div>
  )
}

export default Avatar
