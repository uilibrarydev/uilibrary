import React from 'react'
import { More as _More } from '../index'

export default {
  title: 'More',
  component: _More
}
const Template = () => {
  return (
    <div onClick={() => console.log('sdjbsd')}>
      <_More
        buttonText={{
          expand: 'Ավելին',
          collapse: 'Փակել'
        }}
        collapsedText={'I am informed and agree that:'}
        expandedText={`I am informed and agree that:
 - The vacation application is considered submitted if it has been approved by the manager(s) and substitute(s). If the approvals haven’t been obtained, the application cannot be considered by the HRM and is not subject to processing.
The payment for the annual vacation is made:
3 days before the start of the vacation, if the application approvals are available at least 6 working days before the vacation begins,
Within 3 working days after the start of the vacation, if application approvals were provided within 5 working days before the vacation begins.`}
      />
    </div>
  )
}

export const More = Template.bind({})
