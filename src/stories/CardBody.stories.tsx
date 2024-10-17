import React from 'react'
import { CardBody as _TCardBody } from '../index'
import { StoryFn } from '@storybook/react'
import { TCardBodyProps } from '../components/CardBody/types'
// @ts-ignore
import cardImg from '../assets/images/cards-img.png'

export default {
  title: 'CardBody',
  component: _TCardBody
}
const Template: StoryFn<TCardBodyProps> = (args) => {
  return (
    <div style={{ maxWidth: '448px' }}>
      <_TCardBody {...args} />
    </div>
  )
}

export const CardBody = Template.bind({})

CardBody.args = {
  illustration: cardImg,
  title: 'Title',
  description: 'Subtitle text comes here',
  buttonProps: {
    primary: {
      buttonText: 'Primary button'
    },
    secondary: { buttonText: 'Secondary button' }
  }
}
