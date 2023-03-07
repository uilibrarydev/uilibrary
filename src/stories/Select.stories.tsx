import React, { useState } from 'react'
import { Select as SelectComp } from '../components'
import { TItemValue, TSelectOptions } from '../types/globals'

export default {
  title: 'Select',
  component: SelectComp
}

const OPTIONS: TSelectOptions = [
  {
    value: 'armenia',
    label: 'Armenia'
  },
  {
    value: 'italy',
    label: 'Italy'
  }
]

const Template = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<TItemValue>(null)

  return (
    <div style={{ width: 300 }}>
      <SelectComp
        label="Select"
        placeHolder="Select country"
        onSelect={setSelectedValue}
        options={OPTIONS}
        selectedValue={selectedValue}
      />
    </div>
  )
}
export const Select = Template.bind({})
