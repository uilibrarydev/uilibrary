import React from 'react'

import Icon from '../Icon'

import { TSwitcherProps } from './types'
import '../../assets/styles/components/_controllers.scss'

export const Switcher = (props: TSwitcherProps): JSX.Element => {
  const {
    onClick,
    id = '',
    name,
    value,
    disabled,
    size = 'large',
    setFieldValue,
    selectedValue,
    className = ''
  } = props
  const isChecked = !!value || selectedValue

  const changeHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked, { shouldValidate: !isChecked })
    }

    if (onClick) {
      onClick(!isChecked)
    }
  }

  return (
    <label
      id={id}
      className={`controller controller--switch controller--switch-${size} 
                    ${className}
                    ${disabled ? 'controller--disabled' : ''} 
                    `}
    >
      <input
        type="checkbox"
        tabIndex={0}
        onChange={changeHandler}
        checked={selectedValue}
        disabled={disabled}
      />
      <span className="controller__icon">
        <span className="controller__icon__inner">
          {selectedValue ? <Icon name="mark" size="xsmall" /> : null}
        </span>
      </span>
    </label>
  )
}

Switcher.displayName = 'Switcher'
export default Switcher
