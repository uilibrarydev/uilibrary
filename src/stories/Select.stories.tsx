import React, { useRef, useState } from 'react'
import {
  Button,
  Select as SelectComp,
  MultiSelect as MultiSelectComp,
  Filter as FilterDropdownComp,
  NestedSelect as NestedSelectComp
} from '../components'

import imageFile from '../assets/images/avatar.jpg'
import Icon from '../components/Icon'

type TItemValue = string | number | null
declare type TItemLabel = string | number

type TSelectOption = {
  value: TItemValue
  label: TItemLabel
  meta?: string
  disabled?: boolean
  children?: TSelectOption[]
}

type TSelectOptions = TSelectOption[]

type TSelectGroupOption = {
  title: string
  data: TSelectOptions
}

type TSelectGroupOptions = TSelectGroupOption[]

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
    label: 'Armenia',
    meta: 'AM'
  },
  {
    value: 'italy',
    label: 'Italy',
    meta: 'IT'
  },
  {
    value: 'france',
    label: 'France',
    meta: 'FR'
  },
  {
    value: 'spain',
    label: 'Spain',
    meta: 'SP'
  },
  {
    value: 'germany',
    label: 'Germany',
    meta: 'De'
  }
]
const OPTIONS_CITIES: TSelectOptions = [
  {
    value: 'yerevan',
    label: 'Yerevan'
  },
  {
    value: 'rome',
    label: 'Rome'
  },
  {
    value: 'paris',
    label: 'Paris'
  },
  {
    value: 'aaaa',
    label: 'iiii'
  }
]

const OPTIONS_GROUPED: TSelectGroupOptions = [
  {
    title: 'Countries',
    data: OPTIONS
  },
  {
    title: 'Cities',
    data: OPTIONS_CITIES
  }
]

const OPTIONS_NESTED: TSelectOptions = [
  {
    value: 1,
    label: 'Ameribank',
    children: [
      {
        value: 2,
        label: 'BOD',
        children: [
          {
            value: 3,
            label: 'Managment board'
          },
          {
            value: 4,
            label: '4'
          }
        ]
      },
      {
        value: 10,
        label: '3',
        children: [
          {
            value: 5,
            label: '5'
          },
          {
            value: 6,
            label: '6',
            children: [
              {
                value: 7,
                label: '7'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 8,
    label: '8',
    children: [
      {
        value: 9,
        label: '9'
      },
      {
        value: 10,
        label: '10'
      }
    ]
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
  isLoading: false,
  options: OPTIONS,
  withFooter: true,
  avatar: image.src,
  placeHolder: 'Select country',
  labelLeftIconProps: { name: 'user' },
  optionRightIconComponent: null,
  labelRightIconComponent: null
}

// -----------MULTISELECT---------
const MultiSelect1 = (args): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>([])
  console.log('selectedValues', selectedValues)

  return (
    <div style={{ width: 300 }}>
      <MultiSelectComp
        {...args}
        isGrouped
        // withTabs
        selectedItems={selectedValues}
        setSelectedItems={setSelectedValues}
      />
    </div>
  )
}
export const MultiSelect = MultiSelect1.bind({})

MultiSelect.args = {
  isLoading: false,
  label: 'Select',
  options: OPTIONS_GROUPED,
  avatar: image.src,
  placeHolder: 'Select country',
  labelLeftIconProps: { name: 'user' },
  labelRightIconComponent: <Icon name="user" size="xsmall" className="mr-4" />,
  optionRightIconComponent: <Icon name="more" size="xsmall" />
}

// ----------NESTED_SELECT---------------

const NestedSelect1 = (args): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const closeHandler = () => setIsOpen(false)
  return (
    <div style={{ width: 300 }}>
      <NestedSelectComp
        {...args}
        isGrouped
        parentRef={containerRef.current}
        closeHandler={closeHandler}
        isOpen={isOpen}
        selectedItems={selectedValues}
        setSelectedValue={setSelectedValues}
      />
    </div>
  )
}
export const NestedSelect = NestedSelect1.bind({})

NestedSelect.args = {
  isLoading: false,
  label: 'Select',
  options: OPTIONS_NESTED,
  avatar: image.src,
  placeHolder: 'Select country',
  labelLeftIconProps: { name: 'user' },
  labelRightIconComponent: <Icon name="user" size="xsmall" className="mr-4" />,
  optionRightIconComponent: <Icon name="more" size="xsmall" />
}
// ----------FILTERDROPDOWN---------------

const FilterDropdown1 = (args): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const closeHandler = () => setIsOpen(false)
  return (
    <div style={{ width: 300, display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }} ref={containerRef}>
        <Button
          type="secondary"
          iconProps={{ name: 'filter' }}
          buttonText={'filter'}
          onClick={() => setIsOpen(!isOpen)}
        />
        <FilterDropdownComp
          {...args}
          isGrouped
          parentRef={containerRef.current}
          closeHandler={closeHandler}
          isOpen={isOpen}
          selectedItems={selectedValues}
          setSelectedItems={setSelectedValues}
        />
      </div>
    </div>
  )
}
export const FilterDropdown = FilterDropdown1.bind({})

FilterDropdown.args = {
  isLoading: true,
  options: OPTIONS_NESTED,
  avatar: image.src,
  labelLeftIconProps: { name: 'user' },
  labelRightIconComponent: <Icon name="user" size="xsmall" className="mr-4" />,
  optionRightIconComponent: <Icon name="more" size="xsmall" />
}
