import React, { useState } from 'react'
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
  const handleCloseSheet = () => setIsOpen(false)
  const handleOpenSheet = () => {
    setIsOpen(true)
  }
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  const [open, setOpen] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => setIsModalOpen(false)
  const openModal = () => setIsModalOpen(true)
  const items = [
    {
      label: 'Edit',
      iconProps: {
        name: 'edit'
      },
      handler: () => {
        console.log('test')
        openModal()
      },
      value: 1
    }
  ]

  return (
    <div>
      <button onClick={handleOpenSheet}>Open Side Sheet</button>
      <_SideSheet
        {...args}
        size="small"
        onClose={handleCloseSheet}
        isOpen={isOpen}
        onSumbit={() => console.log('submit')}
        buttonProps={{
          confirm: {
            buttonText: 'Register',
            buttonActionType: 'submit'
          },
          cancel: { buttonText: 'Cancel' }
        }}
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
              <>
                <FormField
                  name={'attachedEmployees'}
                  As={(props) => {
                    return (
                      <MultiSelect
                        {...props}
                        isGrouped
                        label={'attachedEmployees'}
                        maxSelectCount={1}
                        translations={{
                          innerLabel: 'Selected employees',
                          clearAllLabel: 'Clear All',
                          overflowText: '%s selected',
                          emptyListMainMessage: "Sorry, we couldn't find any results"
                        }}
                        helperText={'You cannot add more than 1 employees.'}
                        options={[
                          {
                            title: 'Software development and automation center',
                            data: [{ label: 'Armen', value: 3 }]
                          }
                        ]}
                      />
                    )
                  }}
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
              </>
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
              <Menu
                {...args}
                onClose={() => setOpen(false)}
                parentRef={ref}
                menuItems={items}
                isOpen={open}
              />
            </div>
          </div>
          {isModalOpen && (
            <Modal
              {...args}
              onClose={closeModal}
              isOpen={isModalOpen}
              onSubmit={() => console.log('submit')}
              buttonProps={{
                confirm: {
                  buttonText: 'Register',
                  buttonActionType: 'submit'
                },
                cancel: { buttonText: 'Cancel' }
              }}
            >
              <div>Modal content</div>
            </Modal>
          )}
        </>
      </_SideSheet>
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
  }
  // position: 'left'
}
