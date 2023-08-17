import React from 'react'
import Radio from '.'

import { TRadioGroupProps, TRadioOptionItem } from './types'
import './index.scss'
import Label from '../../helperComponents/Label'

const RadioGroup = (props: TRadioGroupProps): JSX.Element => {
  const {
    isHorizontal = false,
    name,
    options,
    setFieldValue,
    value,
    handleChange,
    label,
    required
  } = props

  const onSelect = (selected: number | string) => {
    if (name && setFieldValue) {
      setFieldValue(name, selected, { shouldValidate: true })
    }
    if (handleChange) {
      handleChange(selected)
    }
  }

  return (
    <div
      className={`radio-group ${
        isHorizontal ? 'radio-group--horizontal' : 'radio-group--vertical'
      }`}
    >
      <Label className="radio-group__label" text={label} required={required} />

      {options.map((radioOption: TRadioOptionItem) => {
        return (
          <Radio
            label={radioOption.label}
            key={radioOption.value}
            name={name}
            className="radio-group__item"
            isSelected={radioOption.value === value}
            onClick={() => onSelect(radioOption.value)}
            dataId={(radioOption.dataId)}
          />
        )
      })}
    </div>
  )
}

export default RadioGroup
