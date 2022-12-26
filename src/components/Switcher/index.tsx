import React from 'react'
import { TSwitcherProps } from './types'
import { customColors } from '../../consts'
import './index.scss'

const Switcher = (props: TSwitcherProps): JSX.Element => {
  const { isChecked, onChanage, id = '', backgroundColor = 'inputBorderActive' } = props

  const handleClick = () => {
    onChanage(!isChecked)
  }

  return (
    <div
      className="custom_switcher_container"
      onClick={handleClick}
      id={id}
      style={{ backgroundColor: customColors[backgroundColor] }}
    >
      <div className={`switcher_content ${isChecked ? 'checked' : 'unChecked'} `}>
        <div className="circle" />
      </div>
    </div>
  )
}

export default Switcher
