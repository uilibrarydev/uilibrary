import {
  CardItem as _TCardItem,
  IconDelete,
  IconEdit,
  IconInfo,
  IconPeople,
  IconPerson
} from '../index'
import type { StoryFn } from '@storybook/react'
import { TCardItemProps } from '../components/Cards/types'

export default {
  title: 'Cards',
  component: _TCardItem
}

const Template: StoryFn<TCardItemProps> = (args) => {
  return <_TCardItem {...args} />
}

export const Cards = Template.bind({})

Cards.args = {
  icon: {
    Component: IconPerson,
    size: 'large'
  },
  title: 'Michael Jordan',
  subtitleProps: {
    subtitle: 'Michael Jordan',
    iconProps: {
      Component: IconInfo,
      size: 'small'
    }
  },
  children: (
    <div className={'flexbox'}>
      <IconDelete className={'mr-12'}/>
      <IconEdit />
    </div>
  )
  // breadCrumbItems: [
  //   {
  //     label: 'Home',
  //     value: 1,
  //     onClick: noop
  //   },
  //   {
  //     label: 'Application',
  //     value: 2,
  //     onClick: noop
  //   },
  //   {
  //     label: 'Details',
  //     value: 3,
  //     onClick: noop
  //   }
  // ]
}
