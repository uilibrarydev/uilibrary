import React from 'react'
import { TDividerProps } from './types'
import './index.scss'
import { customColors } from '../../consts'

const Divider = (props: TDividerProps): JSX.Element => {
  const { styles, color = 'borderGray', isHorizontal = true } = props
  return (
    <div
      style={{ ...styles, backgroundColor: customColors[color] }}
      className={`divider ${isHorizontal ? 'divider_horizontal' : 'divider_vertical'}`}
    />
  )
}

export default Divider
