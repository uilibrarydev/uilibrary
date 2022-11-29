import React from 'react'
import { customIcons } from '../../assets'
import { iconSizes, customColors } from '../../consts'
import { IconPropTypes } from './types'
import './index.css'

const Icon = (props: IconPropTypes): JSX.Element => {
  const { name, size = 'small', color, onClick, className, refHandler } = props

  const svg = customIcons[name as keyof TCustomIcons]

  const iconSize = iconSizes[size as keyof TIconSizes]
  const iconColor = customColors[color as keyof TCustomColors]

  return (
    <div
      ref={refHandler}
      onClick={onClick}
      className={`custom-icon ${className}`}
      dangerouslySetInnerHTML={{ __html: svg(iconColor, iconSize) }}
    />
  )
}

export default Icon
