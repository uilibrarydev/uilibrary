import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComp, Text } from '../components'

const ICONS = [
  'pdf-dark',
  'login',
  'logout',
  'add-user',
  'add-user-hover',
  'add-circle',
  'select-all',
  'facebook',
  'twitter',
  'instagram',
  'linkedin',
  'apple',
  'medium',
  'telegram',
  'project-product',
  'only-employee',
  'units-employee',
  'percent',
  'attach',
  'close',
  'add',
  'mark',
  'dram',
  'phone',
  'phone-hover',
  'menu',
  'menu-hover',
  'repeat',
  'repeat-hover',
  'filter',
  'trash',
  'trash-hover',
  'search',
  'eye-on',
  'eye-off',
  'mail',
  'mail-hover',
  'image',
  'link',
  'wallet',
  'minus',
  'more',
  'warning',
  'warning-hover',
  'error',
  'caret-left',
  'caret-right',
  'caret-down',
  'caret-up',
  'favorite',
  'favorite-hover',
  'lock',
  'lock-hover',
  'settings',
  'settings-hover',
  'comment',
  'comment-hover',
  'bookmark',
  'bookmark-hover',
  'notification',
  'notification-hover',
  'notification2',
  'notification2-hover',
  'moneybox',
  'moneybox-hover',
  'user',
  'user-hover',
  'info',
  'info-hover',
  'edit',
  'edit-hover',
  'share',
  'share-hover',
  'home',
  'home-hover',
  'checkmark',
  'checkmark-hover',
  'calendar',
  'calendar-hover',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'arrow2-left',
  'arrow2-right',
  'arrow2-up',
  'arrow2-down'
]

export default {
  title: 'Icon',
  component: IconComp,
  argTypes: {
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'selected',
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
      options: ['xxlarge','xlarge','large', 'medium', 'small', 'xsmall', 'xxsmall'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
    {ICONS.map((iconName) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
          flex: '70px',
          maxWidth: '70px'
        }}
        key={iconName}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            marginBottom: '5px',
            border: '1px solid #919191',
            backgroundColor: `${args.type == 'inverse' ? '#919191' : ''}`
          }}
        >
          <IconComp {...args} name={iconName} size={`${args.size}`} type={`${args.type}`} />
        </div>
        <Text size="small">{iconName}</Text>
      </div>
    ))}
  </div>
)

export const Icon = Template.bind({})
Icon.args = {
  type: '',
  size: 'medium'
}
