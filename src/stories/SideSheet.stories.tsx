import React, { useState } from 'react'
import {Button, Menu as MenuComp, Modal as ModalComp, SideSheet as SideSheetComp} from '../components'

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
    },
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
          <div style={{ height: 2000 }}>
            <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
              <Button onClick={() => setOpen(!open)} iconProps={{ name: 'more' }} />
              {open ? (
                  <MenuComp {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} />
              ) : null}
            </div>
          </div>
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
