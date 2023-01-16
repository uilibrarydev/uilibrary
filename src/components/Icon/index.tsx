import React from 'react'
import { customIcons } from '../../assets/icons'
import { iconSizes, customColors } from '../../consts'
import { IconPropTypes } from './types'
import './index.scss'

const Icon = (props: IconPropTypes): JSX.Element => {
  const {
    name,
    size = 'small',
    color,
    withWrapper = false,
    wrapperColor = 'borderGray',
    onClick,
    className,
    refHandler
  } = props

  const svg = customIcons[name as keyof TCustomIcons]

  const iconSize = iconSizes[size as keyof TIconSizes]
  const iconColor = customColors[color as keyof TCustomColors]

  let content = (
    <div
      ref={refHandler}
      onClick={onClick}
      className={`custom_icon ${className}`}
      dangerouslySetInnerHTML={{ __html: svg(iconColor, iconSize) }}
    />
  )

  if (withWrapper) {
    content = (
      <div className="icon_wrapper" style={{ border: `1px solid ${customColors[wrapperColor]}` }}>
        {content}
      </div>
    )
  }

  return content
}

export default Icon
