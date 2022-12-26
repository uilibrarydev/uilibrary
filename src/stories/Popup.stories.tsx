import React, { useState } from 'react'
import { Popup as PopupComp } from '../components'

export default {
  title: 'Popup',
  component: PopupComp
}

const Template = (args): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const closePopup = () => setIsOpen(false)
  const openPopup = () => setIsOpen(true)
  return (
    <div>
      <p onClick={openPopup}>click here </p>
      <PopupComp onClose={closePopup} {...args}>
        <div style={{ height: 100 }}>popup content</div>
      </PopupComp>
    </div>
  )
}
export const Popup = Template.bind({
  isOpen: false
})
