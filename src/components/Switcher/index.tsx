import React from 'react'
import { TSwitcherProps } from './types'
import { customColors } from '../../consts'
import './index.scss'

export const Switcher = React.forwardRef<HTMLDivElement, TSwitcherProps>(
  (
    {
      isChecked,
      onClick,
      id = '',
      backgroundColor = 'inputBorderActive',
      setFieldValue,
      name,
      value
    },
    ref
  ): JSX.Element => {
    const isCheckboxChecked = value || isChecked

    const handleClick = () => {
      if (onClick) {
        onClick(!isCheckboxChecked)
      }
      if (name && setFieldValue) {
        setFieldValue(name, !isCheckboxChecked)
      }
    }

    return (
      <div
        ref={ref}
        className="custom_switcher_container"
        onClick={handleClick}
        id={id}
        style={{ backgroundColor: customColors[backgroundColor] }}
      >
        <div className={`switcher_content ${isCheckboxChecked ? 'checked' : 'unChecked'} `}>
          <div className="circle" />
        </div>
      </div>
    )
  }
)

Switcher.displayName = 'Switcher'
export default Switcher
