import React, { useState } from 'react'
import Radio from '.'

import { TRadioGroupProps, TRadioOptionItem } from './types'
import './index.scss'

const RadioGroup = (props: TRadioGroupProps): JSX.Element => {
  const { isHorizontal = false, name, options, setFieldValue, value } = props

  const [selectedValue, setSelectedValue] = useState(value)

  const onSelect = (selected: number) => {
    setSelectedValue(selected)
    if (name && setFieldValue) {
      setFieldValue(name, selected, { shouldValidate: true })
    }
  }

  return (
    <div className={`radiogroup_container ${isHorizontal ? 'horizontal' : 'vertical'}`}>
      {options.map((radioOption: TRadioOptionItem) => {
        return (
          <Radio
            label={radioOption.label}
            key={radioOption.value}
            name={name}
            className="radio_item"
            isSelected={radioOption.value.toString() === selectedValue?.toString()}
            onClick={() => onSelect(radioOption.value)}
          />
        )
      })}
    </div>
  )
}

export default RadioGroup
