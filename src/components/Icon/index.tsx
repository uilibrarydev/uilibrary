import React from 'react'
import { customIcons } from '../../assets'
import { iconSizes, customColors } from '../../consts'
import { IconPropTypes } from './types'
import './index.scss'

const Icon = (props: IconPropTypes): JSX.Element => {
  const { name, size = 'small', color, withWrapper, onClick, className, refHandler } = props

  const svg = customIcons[name as keyof TCustomIcons]

  const iconSize = iconSizes[size as keyof TIconSizes]
  const iconColor = customColors[color as keyof TCustomColors]

  let content = (
    <div
      ref={refHandler}
      onClick={onClick}
      className={`custom-icon ${className}`}
      dangerouslySetInnerHTML={{ __html: svg(iconColor, iconSize) }}
    />
  )

  if (withWrapper) {
    content = <div className="icon_wrapper">{content}</div>
  }

  return content
}

export default Icon
