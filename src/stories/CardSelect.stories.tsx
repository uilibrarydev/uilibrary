import React from 'react'
import { CardSelect as _CardSelect } from '../components/CardSelect'
import { Popover } from '../components/Popover'
import { Icon } from '../components/Icon'

export default {
  title: 'CardSelect',
  component: _CardSelect,
  argTypes: {}
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
  title: 'Card Select',
  badgeText: 'Badge',
  disabled: false,
  withAction: true
}
