import React from 'react'
import { CardSelect as _CardSelect } from '../components/CardSelect'
import { Popover } from '../components/Popover'
import { Icon } from '../components/Icon'

export default {
  title: 'CardSelect',
  component: _CardSelect,
  argTypes: {
    type: {
      options: ['' , 'simple' ],
      control: { type: 'radio' }
    },
  }
}

const Template = (args) => (
  <_CardSelect
    {...args}
    inputProps={{
      label: 'Label',
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
    }}
  />
)

export const CardSelect = Template.bind({})

CardSelect.args = {
  type: '',
  title: 'Card Select',
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
  ]
}
