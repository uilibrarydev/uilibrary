import React, { useState } from 'react'
import { SideSheet as SiteSheetComp } from '../components'

export default {
  title: 'SideSheet',
  component: SiteSheetComp,
  argTypes: {
    position: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args): JSX.Element => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleOpenSheet = () => {
    setIsSheetOpen(true)
  }

  const handleCloseSheet = () => {
    setIsSheetOpen(false)
  }
  return (
    <div>
      <button onClick={handleOpenSheet}>Open Site Sheet</button>
      <SiteSheetComp {...args} isOpen={isSheetOpen} onClose={handleCloseSheet}>
        <h2>Site Sheet Content</h2>
        <p>This is the content of the site sheet.</p>
      </SiteSheetComp>
    </div>
  )
}

export const SideSheet = Template.bind({})

SideSheet.args = {
  isOpen: false,
  onClose: () => ({}),
  children: null,
  position: 'right'
}
