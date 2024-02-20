import React, { useState } from 'react'
import { Modal as _Modal } from '../index'

export default {
  title: 'Modal',
  component: _Modal,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args: any): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <div>
      <p onClick={openModal}>click here </p>
      <_Modal
        {...args}
        onClose={closeModal}
        isOpen={isOpen}
        onSumbit={() => {
          closeModal()
          console.log('submit')
        }}
        buttonProps={{
          confirm: {
            buttonText: 'Register',
            buttonActionType: 'submit'
          },
          cancel: { buttonText: 'Cancel' }
        }}
      >
        <div>Modal content</div>
      </_Modal>
    </div>
  )
}
export const Modal = Template.bind({})

Modal.args = {
  size: 'small',
  title: 'Title',
  closeIcon: false,
  withFooter: true,
  titleIconProps: {
    name: 'checkmark-hover'
  }
}
