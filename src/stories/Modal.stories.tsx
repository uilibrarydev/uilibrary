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

const Template = (args: any): JSX.Element => {
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
      </ModalComp>
    </div>
  )
}
export const Modal = Template.bind({})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Modal.args = {
  size: 'small',
  title: 'Title',
  closeIcon: false,
  withFooter: true,
  titleIconProps: {
    name: 'checkmark-hover'
  }
}
