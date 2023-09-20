import React, {useState} from 'react'
import {
  Button, Input,
  Menu as MenuComp,
  Modal as ModalComp, MultiSelect,
  SideSheet as SideSheetComp
} from '../components'
import {FormContainer} from '../index';
import FormField from '../components/FormField';
import * as yup from 'yup';
import {log} from 'util';

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


const VALIDATION_SCHEME = yup.object({
  test: yup.string().required('validation').nullable(),
  firstname: yup.string().required('validation').nullable()
})

const INITIAL_VALUES = {
  firstname: 5
}


const Template = (args): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseSheet = () => setIsOpen(false)
  const handleOpenSheet = () => {
    setIsOpen(true)
  }
  const [ref, setRef] = useState<any>(null)

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
          {/*<div>*/}
          {/*  <FormContainer*/}
          {/*      onSubmit={(data) => console.log('data', data)}*/}
          {/*      validationScheme={VALIDATION_SCHEME}*/}
          {/*      initialValues={INITIAL_VALUES}*/}
          {/*  >*/}
          {/*    <>*/}
          {/*      <FormField*/}
          {/*          name={'attachedEmployees'}*/}
          {/*          As={(props) => {*/}
          {/*            return (*/}
          {/*                <MultiSelect*/}
          {/*                    {...props}*/}
          {/*                    isGrouped*/}
          {/*                    label={'attachedEmployees'}*/}
          {/*                    maxSelectCount={1}*/}
          {/*                    translations={{*/}
          {/*                      innerLabel: 'Selected employees',*/}
          {/*                      clearAllLabel: 'Clear All',*/}
          {/*                      overflowText: '%s selected',*/}
          {/*                      emptyListMainMessage: "Sorry, we couldn't find any results"*/}
          {/*                    }}*/}
          {/*                    helperText={'You cannot add more than 1 employees.'}*/}
          {/*                    options={[*/}
          {/*                      {*/}
          {/*                        title: 'Software development and automation center',*/}
          {/*                        data: [{ label: 'Armen', value: 3 }]*/}
          {/*                      }*/}
          {/*                    ]}*/}
          {/*                />*/}
          {/*            )*/}
          {/*          }}*/}
          {/*      />*/}
          {/*    </>*/}
          {/*  </FormContainer>*/}
          {/*</div>*/}
          <div style={{ height: 2000 }}>
            <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
              <Button onClick={() => setOpen(!open)} iconProps={{ name: 'more' }} />
              {open ? (
                <MenuComp
                  {...args}
                  onClose={() => setOpen(false)}
                  parentRef={ref}
                  menuItems={items}
                />
              ) : null}
            </div>
          </div>
          {
              isModalOpen &&
          <ModalComp
            {...args}
            onClose={closeModal}
            isOpen={isModalOpen}
            onSumbit={() => console.log('submit')}
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
          }
        </>
      </SideSheetComp>
    </div>
  )
}

export const SideSheet = Template.bind({})

SideSheet.args = {
  title: 'Side sheet title',
  headerButtons: {
    close: {
      iconProps: {
        name: 'close'
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
