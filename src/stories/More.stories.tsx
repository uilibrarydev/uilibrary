import React from 'react'
import { More as MoreComp } from '../components'

export default {
  title: 'More',
  component: MoreComp
}
const Template = (): JSX.Element => {
  return (
    <div onClick={() => console.log('sdjbsd')}>
      <MoreComp
        expandedText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        collapsedText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      />
    </div>
  )
}

export const More = Template.bind({})
