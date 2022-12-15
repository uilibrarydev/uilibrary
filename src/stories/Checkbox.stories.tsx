import React, { useMemo, useState } from 'react'
import { Checkbox as CheckboxComp, Text } from '../components'

export default {
  title: 'Checkbox',
  component: CheckboxComp
}
const Template = (): JSX.Element => {
  const [icChecked, setIsChecked] = useState(false)

  const clickHandler = () => {
    setIsChecked((_isChecked) => !_isChecked)
  }

  const label = useMemo(() => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text>Համաձայն եմ ԱՔՌԱ հարցման կատարմանը</Text>
        <Text color="inputBorderActive" onClick={(e) => e.stopPropagation()}>
          Ավելին
        </Text>
      </div>
    )
  }, [])
  return (
    <div>
      <CheckboxComp label={label} value={icChecked} onClick={clickHandler} />
    </div>
  )
}

export const Checkbox = Template.bind({})
