import React, { useRef, useState } from 'react'
import {
  Button,
  Menu,
  Modal,
  MultiSelect,
  SideSheet as _SideSheet,
  FormContainer,
  FormField
} from '../index'
import * as yup from 'yup'

export default {
  title: 'Side Sheet',
  component: _SideSheet,
  argTypes: {
    position: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
}

const VALIDATION_SCHEME = yup.object({
  test: yup.string().required('validation').nullable(),
  firstname: yup.string().required('validation').nullable()
})

const INITIAL_VALUES = {
  firstname: 5
}

const Template = (args: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenSheet = () => {
    setIsOpen(true)
  }
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [isDirty, setIsDirty] = useState<boolean>(false)

  const [open, setOpen] = useState(false)

  const closeModal = () => setIsModalOpen(false)
  const onModalOutsideClick = () => {
    setIsModalOpen(false)
  }
  const openModal = () => setIsModalOpen(true)
  const _isDirtyRef = useRef<boolean>(false)

  const onModalSubmit = () => {
    setIsModalOpen(false)
    setIsOpen(false)
  }

  const closeSideSheet = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (_isDirtyRef.current) {
      setIsModalOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  const onSubmit = (isChecked: boolean) => {
    console.log(isChecked)
    console.log('submit')
  }

  return (
    <div>
      <button onClick={handleOpenSheet}>Open Side Sheet</button>
      <_SideSheet
        {...args}
        size="small"
        onClose={closeSideSheet}
        isOpen={isOpen}
        shouldRemoveCallback={false}
        onSubmit={onSubmit}
        scrollToTopOptions={{
          onPixel: 200
        }}
      >
        <>
          <div>
            <FormContainer
              onSubmit={(data) => console.log('data', data)}
              validationScheme={VALIDATION_SCHEME}
              initialValues={INITIAL_VALUES}
            >
              <Button
                buttonText={'show modal on outside click'}
                onClick={() => (_isDirtyRef.current = true)}
              />
              <div>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
              </div>
            </FormContainer>
          </div>

          <div style={{ height: 2000 }}>
            <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
              <Button onClick={() => setOpen(!open)} iconProps={{ name: 'more' }} />
            </div>
          </div>
        </>
      </_SideSheet>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={onModalSubmit}
        closeOnOutsideClick={false}
        buttonProps={{
          confirm: {
            buttonText: 'Register',
            buttonActionType: 'submit'
          },
          cancel: { buttonText: 'Cancel' }
        }}
      >
        content
      </Modal>
    </div>
  )
}

export const SideSheet = Template.bind({})

SideSheet.args = {
  title: 'Side sheet title',
  headerButtons: {
    close: {
      iconProps: {
        name: 'close-hover'
      }
    },
    back: {
      iconProps: {
        name: 'arrow2-left'
      }
    },
    pin: {
      iconProps: {
        name: 'attach'
      }
    }
  },
  footerButtons: {
    confirm: {
      buttonText: 'Save'
    },
    cancel: { buttonText: 'Cancel' },
    extraButton: { buttonText: 'Other action' }
  },
  checkboxInfo: {
    label: 'Agree to terms',
    isChecked: false
  }
  // position: 'left'
}
