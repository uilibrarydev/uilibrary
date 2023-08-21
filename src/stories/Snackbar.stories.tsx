import React, { useEffect, useState } from 'react'
import { Button, Snackbar as Snackbar_, notify } from '../components'

export default {
  title: 'Snackbar',
  component: Snackbar_,
  argTypes: {
    type: {
      options: ['information', 'success', 'error', 'warning'],
      control: { type: 'radio' }
    }
  }
}

const Template = () => {
  const [infoMessages, setinfoMessages] = useState([])

  const removeMessage = (id) => {
    setinfoMessages((_infoMessages) => _infoMessages.filter((elem) => elem.toastId !== id))
  }

  const addMessage = () => {
    const __id = Math.random()

    setinfoMessages((_infoMessages) => [
      ..._infoMessages,
      {
        toastId: __id,
        message: `${__id}`,
        closeHandler: () => removeMessage(__id)
      }
    ])
  }

  useEffect(() => {
    if (infoMessages.length) {
      const { toastId, message, type } = infoMessages[infoMessages.length - 1]
      notify({
        text: message,
        type,
        toastId: toastId,
        actionProps: {
          buttonText: 'close',
          onClick: () => {
            removeMessage(toastId)
          }
        },
        closeSnackbar: (_id) => {
          removeMessage(_id)
        }
      })
    }
  }, [infoMessages])

  return (
    <div>
      <>
        <Button buttonText={'notify'} onClick={addMessage} />
        <Snackbar_ duration={2000} position="bottom-center" />
      </>
    </div>
  )
}
export const Snackbar = Template.bind({})

Snackbar.args = {}
