import React, { useState } from 'react'
import { TSelectOption } from '../components/Select/types'
import { Select as SelectComp } from '../components'

export default {
  title: 'Select',
  component: SelectComp
}

const OPTIONS: TSelectOption[] = [
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
  const [selectedValue, setSelectedValue] = useState<TSelectOption | null>(null)

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
