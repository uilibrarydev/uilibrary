import React from 'react'

import { TTooltipProps } from './types'
import '../../assets/styles/components/_tooltip.scss'
import Text from '../Text'

export const Tooltip = (props: TTooltipProps): JSX.Element | null => {
  const { size = 'large', position = 'top-left', text, className = '' } = props

  return (
    <div className={`tooltip tooltip--${size} tooltip--${position} ${className}`}>
      {text ? (
        <Text
          className="tooltip__inner"
          type="primary"
          weight="regular"
          lineHeight="small"
          size={`${size == 'small' ? 'xsmall' : 'small'}`}
        >
          {text}
        </Text>
      ) : null}
    </div>
  )
}

export default Tooltip
