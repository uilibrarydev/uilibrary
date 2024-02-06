import React from 'react'
import { Icon, Popover, Status as _Status, Text } from '../index'

export default {
  title: 'Status',
  component: _Status,
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
  return (
    <>
      <_Status {...args} type={'danger'}>
        <Text type={'secondary'} size={'small'}>
          Status subtext
        </Text>
      </_Status>
      <_Status {...args} type={'information'}>
        <Text type={'information'} size={'small'}>
          Status subtext
        </Text>
      </_Status>
    </>
  )
}

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
      <div id="beneficiary-tooltip">
        <Icon name="info" type="information" size="xsmall" className={'ml-4 pointer'} />
      </div>
    </Popover>
  )
}
