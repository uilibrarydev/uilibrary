import React from 'react'
import Radio from '.'

import { TRadioGroupProps, TRadioOptionItem } from './types'
import './index.scss'

const RadioGroup = (props: TRadioGroupProps): JSX.Element => {
  const { isHorizontal = false, name, options, setFieldValue, value } = props

  const onSelect = (selected: number) => {
    if (name && setFieldValue) {
      setFieldValue(name, selected, { shouldValidate: true })
    }
  }

  return (
    <div
      className={`radio-group ${
        isHorizontal ? 'radio-group--horizontal' : 'radio-group--vertical'
      }`}
    >
      {options.map((radioOption: TRadioOptionItem) => {
        return (
          <Radio
            label={radioOption.label}
            key={radioOption.value}
            name={name}
            className="radio-group__item"
            isSelected={radioOption.value.toString() === value}
            onClick={() => onSelect(radioOption.value)}
          />
        )
      })}
    </div>
  )
}

export default RadioGroup
