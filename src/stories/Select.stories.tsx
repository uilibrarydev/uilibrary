import React, { useRef, useState } from 'react'
import {
  Button,
  Select as _Select,
  MultiSelect as _MultiSelect,
  FilterSelect as _FilterDropdown,
  NestedSelect as _NestedSelect,
  ButtonSelect as _ButtonSelect,
  Menu,
  Icon
} from '../index'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import imageFile from '../assets/images/avatar.jpg'

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
  component: _Select,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const BUTTON_SELECT_OPTIONS = [
  {
    value: 'jan',
    label: 'Jan'
  },
  {
    value: 'feb',
    label: 'Feb'
  },
  {
    value: 'mrch',
    label: 'March'
  },
  {
    value: 'apr',
    label: 'April'
  },
  {
    value: 'may',
    label: 'May'
  },
  {
    value: 'jun',
    label: 'Jun'
  },
  {
    value: 'jul',
    label: 'Jul'
  },
  {
    value: 'aug',
    label: 'Aug'
  },
  {
    value: 'sep',
    label: 'Sep'
  },
  {
    value: 'oct',
    label: 'Oct'
  },
  {
    value: 'nov',
    label: 'Nov'
  },
  {
    value: 'dec',
    label: 'Dec'
  }
]
const OPTIONS: TSelectOptions = [
  {
    value: 1,
    label:
      'Armeniaaasdasdasdasdlkashdkjlashdkjasdkjashkdjhaskjdhdaskjdhaskjhdkajsdkjasdkjashdjkashdkjhaskdhaskjdhaskjdhaskjdhaskjhdkjas',
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
const Template = (args: any): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<TItemValue>(null)

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center' }}>
      <_Select
        {...args}
        dataId={'kokos'}
        tooltipAddons={{ position: 'bottom-left' }}
        isRequiredField
        options={OPTIONS}
        outerHelperText="helper text"
        selectedItem={selectedValue}
        setSelectedItem={setSelectedValue}
        withSearch={true}
        optionRightIconComponent={(value) => <div>{value}</div>}
      />
    </div>
  )
}
export const Select = Template.bind({})

// -----------ButtonSelect---------
const Template2 = (args: any): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<TItemValue>(null)

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        position: 'absolute',
        top: 100
      }}
    >
      <_ButtonSelect
        {...args}
        size="small"
        buttonProps={{
          buttonText: 'Select',
          type: 'tertiary',
          iconProps: { name: 'caret-down-hover', alignment: 'right' }
        }}
        // tooltipAddons={{ position: 'bottom-left' }}
        isRequiredField
        options={BUTTON_SELECT_OPTIONS}
        outerHelperText="helper text"
        selectedItem={selectedValue}
        setSelectedItem={setSelectedValue}
        withSearch={true}
        dropdownWidth={300}
        // optionRightIconComponent={(value) => <div>{value}</div>}
      />
    </div>
  )
}
export const ButtonSelect = Template2.bind({})

const ButtonMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonRef, setButtonRef] = useState<HTMLDivElement | null>(null)

  const open = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(true)
  }
  const close = () => setIsOpen(false)

  return (
    <div ref={setButtonRef}>
      <Button type="tertiary" onClick={open} iconProps={{ name: 'more' }} size="small" />
      {buttonRef ? (
        <Menu
          menuItems={[
            {
              label: 'delete',
              value: 'delete',
              handler: () => {
                console.log('delete')
              }
            }
          ]}
          parentRef={buttonRef}
          onClose={close}
          isOpen={isOpen}
        />
      ) : null}
    </div>
  )
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Select.args = {
  size: 'large',
  disabled: false,
  isLoading: false,
  options: OPTIONS,
  withFooter: true,
  label: 'country',
  avatar: image.src,
  placeHolder: 'Select country',
  labelLeftIconProps: { name: 'user' },
  optionRightIconComponent: null,
  labelRightIconComponent: null,
  labelAddons: <Icon name={'info'} size={'xsmall'} type={'information'} className={'ml-4'} />
}

// -----------MULTISELECT---------
const MultiSelectTemplate = (args: any): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>([])

  const set = (value, isChecked) => {
    setSelectedValues(value)
  }
  return (
    <div
      style={{ width: 250, height: '100vh', position: 'absolute', left: 500, top: 10 }}
      className="ddddd"
    >
      <_MultiSelect
        {...args}
        isGrouped={true}
        menuOptions={[
          {
            label: 'save template',
            value: '1',
            iconProps: { name: 'select-all' }
          }
        ]}
        dropdownWidth={400}
        align="right"
        maxSelectCount={3}
        emptyListMessage="List is Empty"
        selectedItems={selectedValues}
        setSelectedItems={set}
        labelRightIconComponent={
          <Icon
            name="user"
            size="xsmall"
            className="mr-4"
            onClick={(e: any) => {
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
export const MultiSelect = MultiSelectTemplate.bind({})

MultiSelect.args = {
  isLoading: false,
  label: 'Select',
  options: OPTIONS_GROUPED,
  avatar: image.src,
  placeHolder: 'Select country',
  innerLabel: 'Select',
  helperText: 'To be filled in only for USA, Canada and European countries.',
  labelLeftIconProps: { name: 'user' },
  labelAddons: <Icon name={'info'} size={'xsmall'} type={'information'} className={'ml-4'} />
  // disabled: true
  // labelRightIconComponent: <Icon name="user" size="xsmall" className="mr-4" />,
  // optionRightIconComponent: <Icon name="more" size="xsmall" />
}

// ----------NESTED_SELECT---------------

const NestedSelectTemplate = (args: any): JSX.Element => {
  const [selected, setSelected] = useState<TSelectOption>({
    value: 3,
    label: 'Management board'
  })

  return (
    <div style={{ width: 320, position: 'absolute', left: 300 }}>
      <_NestedSelect
        {...args}
        selected={selected}
        setSelectedValue={setSelected}
        initialSelectedFolderIds={[1, 2]}
      />
    </div>
  )
}
export const NestedSelect = NestedSelectTemplate.bind({})

NestedSelect.args = {
  isLoading: false,
  label: 'Select',
  options: OPTIONS_NESTED,
  placeHolder: 'Select country',
  labelLeftIconProps: { name: 'user' },
  labelRightIconComponent: () => <Icon name="user" size="xsmall" className="mr-4" />,
  optionRightIconComponent: () => (
    <Icon
      name="more"
      size="xsmall"
      onClick={(e: any) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    />
  ),
  labelAddons: <Icon name={'info'} size={'xsmall'} type={'information'} className={'ml-4'} />
}
// ----------FILTERDROPDOWN---------------

const FilterDropdownTemplate = (args: any): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const closeHandler = () => setIsOpen(false)
  return (
    <div
      style={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 300
      }}
    >
      <div style={{ position: 'absolute', left: 300 }} ref={containerRef}>
        <Button
          type="secondary"
          iconProps={{ name: 'filter' }}
          buttonText={'filter'}
          onClick={() => setIsOpen(!isOpen)}
        />
        <_FilterDropdown
          {...args}
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
export const FilterDropdown = FilterDropdownTemplate.bind({})

FilterDropdown.args = {
  isLoading: true,
  options: OPTIONS_NESTED,
  avatar: image.src,
  labelLeftIconProps: { name: 'user' },
  labelRightIconComponent: () => <Icon name="user" size="xsmall" className="mr-4" />,
  optionRightIconComponent: () => <Icon name="more" size="xsmall" />
}
