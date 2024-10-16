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
import imageFile1 from '../assets/images/ArCa.svg'
import { Button } from '../components/Button'

export default {
  title: 'Cards',
  component: _TCardItem
}

const Template: StoryFn<TCardItemProps> = (args) => {
  return <_TCardItem {...args} />
}

export const Cards = Template.bind({})

Cards.args = {
  image: imageFile1,
  icon: {
    Component: IconPerson
  },
  title: 'Michael Jordan',
  subtitleProps: {
    subtitle: 'Michael Jordan',
    iconProps: {
      Component: IconInfo
    }
  },
  children: (
    <div className={'flexbox'}>
      <Button type={'tertiary'} size={'medium'} iconProps={{ Component: IconDelete }} />
      <Button
        type={'tertiary'}
        size={'medium'}
        iconProps={{ Component: IconEdit }}
        className={'ml-12'}
      />
    </div>
  ),
  disabled: false
}
