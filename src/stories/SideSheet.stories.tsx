import React, { useState } from 'react'
import {
  Button,
  Menu as MenuComp,
  Modal as ModalComp,
  MultiSelect,
  SideSheet as SideSheetComp
} from '../components'
import * as yup from 'yup'
import { FormContainer, FormField } from '../index'

export default {
  title: 'SideSheet',
  component: SideSheetComp,
  argTypes: {
    position: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VALIDATION_SCHEME = yup.object({
  test: yup.string().required('validation').nullable(),
  firstname: yup.string().required('validation').nullable()
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <SideSheetComp
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
              </>
            </FormContainer>
          </div>
          <div style={{ height: 2000 }}>
            <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
              <Button onClick={() => setOpen(!open)} iconProps={{ name: 'more' }} />
              <MenuComp
                {...args}
                onClose={() => setOpen(false)}
                parentRef={ref}
                menuItems={items}
                isOpen={open}
              />
            </div>
          </div>
          {isModalOpen && (
            <ModalComp
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
            </ModalComp>
          )}
        </>
      </SideSheetComp>
    </div>
  )
}

export const SideSheet = Template.bind({})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
