import React, { useState } from 'react'
import { Dialog as DialogComp } from '../components'

export default {
  title: 'Dialog',
  component: DialogComp
}

const Template = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true)
  const closePopup = () => setIsOpen(false)
  const openPopup = () => setIsOpen(true)
  return (
    <div>
      <p onClick={openPopup}>click here </p>
      <DialogComp
        onClose={closePopup}
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
