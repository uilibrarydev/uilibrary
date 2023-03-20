import React from 'react'
import { TDividerProps } from './types'
import '../../assets/styles/components/_divider.scss'

const Divider = (props: TDividerProps): JSX.Element => {
  const { type, isHorizontal } = props
  return (
    <hr
      className={`divider divider--${type} ${
        isHorizontal ? 'divider--horizontal' : 'divider--vertical'
      }`}
    />
  )
}

export default Divider
