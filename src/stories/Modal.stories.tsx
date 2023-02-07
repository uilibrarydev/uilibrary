import React, { useState } from 'react'
import { Modal as ModalComp } from '../components'

export default {
  title: 'Modal',
  component: ModalComp,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <div>
      <p onClick={openModal}>click here </p>
      <ModalComp
        {...args}
        onClose={closeModal}
        isOpen={isOpen}
        onSumbit={() => console.log('submit')}
      >
        <div>Modal content</div>
      </ModalComp>
    </div>
  )
}
export const Modal = Template.bind({})

Modal.args = {
  size: 'small',
  title: 'Title',
  closeIcon: false
}
