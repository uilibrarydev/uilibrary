import React, { useState } from 'react'
import { Dialog as DialogComp } from '../components'

export default {
  title: 'Dialog',
  component: DialogComp
}

const Template = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <div>
      <p onClick={openModal}>click here </p>
      <DialogComp
        onClose={closeModal}
        isOpen={isOpen}
        onSumbit={() => console.log('submit')}
        title="Title"
        contentTitle="Label"
        contentText="Save ?"
      />
    </div>
  )
}
export const Dialog = Template.bind({})
