import React from 'react'
import { TSwitcherProps } from './types'
import './index.scss'
import Icon from '../Icon'

export const Switcher = React.forwardRef<HTMLDivElement, TSwitcherProps>(
  (
    { isChecked, onClick, id = '', setFieldValue, name, value, disabled, size },
    ref
  ): JSX.Element => {
    const isCheckboxChecked = value || isChecked

    const handleClick = () => {
      if (onClick) {
        onClick(!isCheckboxChecked)
      }
      if (name && setFieldValue) {
        setFieldValue(name, !isCheckboxChecked, { shouldValidate: !isCheckboxChecked })
      }
    }

    return (
      <div
        ref={ref}
        onClick={handleClick}
        id={id}
        className={`controller controller--switch controller--switch-${size} 
                            ${disabled && 'controller--disabled'} 
                            ${isCheckboxChecked ? 'checked' : ''} 
                            `}
      >
        <span className="controller__icon">{isChecked && <Icon name="mark" size="xsmall" />}</span>
      </div>
    )
  }
)

Switcher.displayName = 'Switcher'
export default Switcher
