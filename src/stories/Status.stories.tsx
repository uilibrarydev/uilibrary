import React from 'react'
import { Status as StatusComp } from '../components'
import { Icon, Popover } from '../index'
import Text from '../components/Text'

export default {
  title: 'Status',
  component: StatusComp,
  argTypes: {
    type: {
      options: [
        'primary',
        'disabled',
        'brand',
        'danger',
        'warning',
        'success',
        'information',
        'discovery'
      ],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => {
  return (<StatusComp {...args}>
  <Text type={'secondary'} size={'small'}>
    Status subtext
  </Text>
</StatusComp>
  )}

export const Status = Template.bind({})

Status.args = {
  text: 'Status text',
  type: 'primary',
  size: 'large',
  withCircle: true,
  leftIconProps: {
    name: 'user'
  },
  rightIconProps: (
    <Popover
      linkAddons={{ url: 'link', beforeLink: 'text before link' }}
      id="beneficiary-tooltip"
      text={'data'}
      position="top-center"
    >
      <div id="beneficiary-tooltip" className="info-tooltip__icon">
        <Icon name="info" type="information" size="xsmall" className={'ml-4'} />
      </div>
    </Popover>
  )
}
