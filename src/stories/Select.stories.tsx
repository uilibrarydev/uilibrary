import React, { useState } from 'react'
import { Select as SelectComp, MultiSelect as MultiSelectComp } from '../components'
import { TItemValue, TSelectOptions } from '../types/globals'
import imageFile from '../assets/images/avatar.jpg'

const image = {
  src: imageFile,
  alt: 'my image'
}

export default {
  title: 'Select',
  component: SelectComp,
  argTypes: {}
}

const OPTIONS: TSelectOptions = [
  {
    value: 'armenia',
    label: 'Armenia'
  },
  {
    value: 'italy',
    label: 'Italy'
  },
  {
    value: 'france',
    label: 'France'
  },
  {
    value: 'spain',
    label: 'Spain'
  },
  {
    value: 'germany',
    label: 'Germany'
  }
]

// -----------SINGLESELECT---------
const Template = (args): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<TItemValue>(null)

  return (
    <div style={{ width: 300 }}>
      <SelectComp {...args} selectedItem={selectedValue} setSelectedItem={setSelectedValue} />
    </div>
  )
}
export const Select = Template.bind({})

Select.args = {
  options: OPTIONS,
  withFooter: false,
  avatar: image.src,
  placeHolder: 'Select country',
  labelLeftIconProps: { name: 'user' },
  labelRightIconProps: { name: 'user' },
  optionRightIconProps: { name: 'more' }
}

// -----------MULTISELECT---------
const MultiSelect1 = (args): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>([])

  return (
    <div style={{ width: 300 }}>
      <MultiSelectComp
        {...args}
        selectedItems={selectedValues}
        setSelectedItems={setSelectedValues}
      />
    </div>
  )
}
export const MultiSelect = MultiSelect1.bind({})

MultiSelect.args = {
  label: 'Select',
  options: OPTIONS,
  avatar: image.src,
  labelLeftIconProps: { name: 'user' },
  labelRightIconProps: { name: 'user' },
  optionRightIconProps: { name: 'more' }
}
