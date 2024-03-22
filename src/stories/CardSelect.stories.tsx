import React, { useState } from 'react'
import { CardSelectGroup as _CardSelectGroup } from '../components/CardSelect'
import { CardSelect as _CardSelect } from '../components/CardSelect'
import { Popover } from '../components/Popover'
import { Icon } from '../components/Icon'
import { CARD_SELECT_TYPES } from '../consts'

export default {
  title: 'CardSelect',
  component: _CardSelectGroup,
  argTypes: {
    cardsGroupType: {
      options: [CARD_SELECT_TYPES.cardRadio, CARD_SELECT_TYPES.card],
      control: { type: 'radio' }
    },
    cardsGroupDisable: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
}

const CARDS = [
  {
    title: 'Card Select',
    chips: [
      {
        text: 'Chip 1',
        color: 'success',
        type: 'filled'
      },
      {
        text: 'Chip 2',
        color: 'warning',
        type: 'filled'
      }
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    badgeText: 'Badge',
    disabled: false,
    withAction: true,
    additionalInfo: [
      {
        key: 'Key 1',
        value: 'Value 1'
      },
      {
        key: 'Key 2',
        value: 'Value 2'
      }
    ],
    inputProps: {
      name: 'input 1',
      label: 'Label',
      handleChange: (e) => {
        console.log(e)
      },
      labelAddons: (
        <Popover
          linkAddons={{ url: 'link', beforeLink: 'text before link' }}
          id="beneficiary-tooltip"
          text={'data'}
          position="top-center"
        >
          <div id="beneficiary-tooltip">
            <Icon name="info" type="information" size="xsmall" className={'ml-4 pointer'} />
          </div>
        </Popover>
      )
    },
    onClick: (e: any) => {
      console.log(e)
    },
    value: 1
  },
  {
    value: 2,
    title: 'Card Select 2',
    chips: [
      {
        text: 'Chip 1',
        color: 'success',
        type: 'filled'
      },
      {
        text: 'Chip 2',
        color: 'warning',
        type: 'filled'
      }
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    badgeText: 'Badge',
    disabled: false,
    withAction: true,
    additionalInfo: [
      {
        key: 'Key 1',
        value: 'Value 1'
      },
      {
        key: 'Key 2',
        value: 'Value 2'
      }
    ],
    inputProps: {
      label: 'Label',
      name: 'input 2',
      labelAddons: (
        <Popover
          linkAddons={{ url: 'link', beforeLink: 'text before link' }}
          id="beneficiary-tooltip"
          text={'data'}
          position="top-center"
        >
          <div id="beneficiary-tooltip">
            <Icon name="info" type="information" size="xsmall" className={'ml-4 pointer'} />
          </div>
        </Popover>
      )
    },
    onClick: (e: any) => {
      console.log(e)
    }
  }
]

const Template = (args) => {
  return (
    <div style={{ width: '50%' }}>
      <_CardSelect {...args} />
    </div>
  )
}

export const CardSelect = Template.bind({})

CardSelect.args = {
  type: CARD_SELECT_TYPES.card,
  title: 'Card Select',
  chips: [
    {
      text: 'Chip 1',
      color: 'success',
      type: 'filled',
    },
    {
      text: 'Chip 2',
      color: 'warning',
      type: 'filled'
    }
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
    'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
  badgeText: 'Badge',
  disabled: false,
  withAction: true,
  additionalInfo: [
    {
      key: 'Key 1',
      value: 'Value 1'
    },
    {
      key: 'Key 2',
      value: 'Value 2'
    }
  ],
  onClick: (e: any) => {
    console.log(e)
  }
}

const CardSelectGroupTemplate = (args) => {
  const [selected, setSelected] = useState(null)
  return (
    <div style={{ width: '50%' }}>
      <_CardSelectGroup {...args} cards={CARDS} value={selected} handleChange={setSelected} />
    </div>
  )
}

export const CardSelectGroup = CardSelectGroupTemplate.bind({})
