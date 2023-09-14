import React, { useRef, useState } from 'react'
import {
  Button,
  Select as SelectComp,
  MultiSelect as MultiSelectComp,
  Filter as FilterDropdownComp,
  NestedSelect as NestedSelectComp,
  Menu
} from '../components'

import imageFile from '../assets/images/avatar.jpg'
import Icon from '../components/Icon'

type TItemValue = string | number | null
declare type TItemLabel = string

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
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const OPTIONS: TSelectOptions = [
  {
    value: 1,
    label: 'Armenia',
    meta: 'AM'
  },
  {
    value: 2,
    label: 'Italy',
    meta: 'IT'
  },
  {
    value: 3,
    label: 'France',
    meta: 'FR'
  },
  {
    value: 4,
    label: 'Spain',
    meta: 'SP'
  },
  {
    value: 5,
    label: 'Germany',
    meta: 'De'
  },
  {
    value: 6,
    label: 'Australia',
    meta: 'AU'
  },
  {
    value: 7,
    label: 'Hungary',
    meta: 'HY'
  },
  {
    value: 8,
    label: 'Georgia',
    meta: 'GE'
  },
  {
    value: 9,
    label: 'Brazil',
    meta: 'BR'
  },
  {
    value: 10,
    label: 'Norway',
    meta: 'NR'
  },
  {
    value: 11,
    label: 'Mexico',
    meta: 'MC'
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
    <div style={{ width: 320 }}>
      <SelectComp
        {...args}
        selectedItem={selectedValue}
        setSelectedItem={setSelectedValue}
        withSearch={true}
      />
    </div>
  )
}
export const Select = Template.bind({})

const ButtonMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonRef, setButtonRef] = useState<HTMLDivElement | null>(null)

  const open = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(true)
  }
  const close = () => setIsOpen(false)

  return (
    <div ref={setButtonRef}>
      <Button type="tertiary" onClick={open} iconProps={{ name: 'more' }} size="small" />
      {isOpen && buttonRef ? (
        <Menu
          menuItems={[
            {
              label: 'delete',
              value: 'delete',
              handler: (e) => {
                console.log('delete')
              }
            }
          ]}
          parentRef={buttonRef}
          onClose={close}
        />
      ) : null}
    </div>
  )
}
Select.args = {
  size: 'large',
  disabled: false,
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

  return (
    <div style={{ width: 320 }}>
      <MultiSelectComp
        {...args}
        isGrouped
        withTabs
        maxSelectCount={3}
        emptyListMessage="List is Empty"
        selectedItems={selectedValues}
        setSelectedItems={setSelectedValues}
        labelRightIconComponent={
          <Icon
            name="user"
            size="xsmall"
            className="mr-4"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          />
        }
        translations={{
          innerLabel: 'Group name',
          clearAllLabel: 'Clear All',
          selectAllLabel: 'Select All'
        }}
        optionRightIconComponent={<ButtonMenu />}
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
  innerLabel: 'Select',
  helperText: 'To be filled in only for USA, Canada and European countries.',
  labelLeftIconProps: { name: 'user' }
  // labelRightIconComponent: <Icon name="user" size="xsmall" className="mr-4" />,
  // optionRightIconComponent: <Icon name="more" size="xsmall" />
}

// ----------NESTED_SELECT---------------

const NestedSelect1 = (args): JSX.Element => {
  const [selected, setSelected] = useState<TSelectOption>({
    value: 3,
    label: 'Managment board'
  })

  return (
    <div style={{ width: 320 }}>
      <NestedSelectComp
        {...args}
        selected={selected}
        setSelectedValue={setSelected}
        initialSelectedFolderIds={[1, 2]}
      />
    </div>
  )
}
export const NestedSelect = NestedSelect1.bind({})

NestedSelect.args = {
  isLoading: false,
  label: 'Select',
  options: OPTIONS_NESTED,
  placeHolder: 'Select country',
  labelLeftIconProps: { name: 'user' },
  labelRightIconComponent: <Icon name="user" size="xsmall" className="mr-4" />,
  optionRightIconComponent: (
    <Icon
      name="more"
      size="xsmall"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    />
  )
}
// ----------FILTERDROPDOWN---------------

const FilterDropdown1 = (args): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const closeHandler = () => setIsOpen(false)
  return (
    <div style={{ width: 320, display: 'flex', flexDirection: 'column' }}>
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
