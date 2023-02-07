import React, { useState } from 'react'
import Icon from '../Icon'

import { TAvatarProps } from './types'
import '../../assets/styles/components/_avatar.scss'

export const Avatar = (props: TAvatarProps): JSX.Element | null => {
  const {
    color = 'default',
    size = 'medium',
    imagePath,
    initials = '',
    className = '',
    isEditable
  } = props
  const [isHovered, setHoverState] = useState(false)

  const onMouseEnter = () => setHoverState(true)
  const onMouseLeave = () => setHoverState(false)

  return (
    <div
      className={`avatar avatar--${color} avatar--${size} ${className} 
                        ${imagePath ? 'avatar--image' : ''}
                        ${isEditable ? 'avatar--edit' : ''}
                       `}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      {!imagePath ? initials : null}
      {isEditable ? (
        <span className="avatar__icon" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Icon name={isHovered ? 'edit-fill' : 'edit'} size="xsmall" type="secondary" />
        </span>
      ) : null}
    </div>
  )
}

export default Avatar
