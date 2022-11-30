import React, { useState } from 'react'
import { TSelectOption } from '../components/Select/types'
import { Select as SelectComp } from '../components'

export default {
  title: 'Select',
  component: SelectComp
}

export interface IupdateOpenedChatParams {
  firstName: string
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
  const [selectedValue, setSelectedValue] = useState<TSelectOption>(OPTIONS[0])
  const onSelect = (value: TSelectOption) => {
    setSelectedValue(value)
  }

  return (
    <div style={{ width: 300 }}>
      <SelectComp onSelect={onSelect} options={OPTIONS} selectedValue={selectedValue} />
    </div>
  )
}
export const Select = Template.bind({})
