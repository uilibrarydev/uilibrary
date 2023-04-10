import React, { useRef, useState } from 'react'
import {
  Button,
  Select as SelectComp,
  MultiSelect as MultiSelectComp,
  Filter as FilterDropdownComp
} from '../components'
import { TItemValue, TSelectOptions, TSelectGroupOptions } from '../types/globals'
import imageFile from '../assets/images/avatar.jpg'
import Icon from '../components/Icon'

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
  label: 'Select',
  options: OPTIONS_GROUPED,
  avatar: image.src,
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
  options: OPTIONS_GROUPED,
  avatar: image.src,
  labelLeftIconProps: { name: 'user' },
  labelRightIconComponent: <Icon name="user" size="xsmall" className="mr-4" />,
  optionRightIconComponent: <Icon name="more" size="xsmall" />
}
