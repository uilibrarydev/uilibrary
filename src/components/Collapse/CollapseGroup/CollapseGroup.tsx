import React, { useState } from 'react'
import { CollapseItem } from '../CollapseItem/CollapseItem'

import { TCollapseGroupProps, TCollapseItem, TCollapseValue } from '../types'

export const CollapseGroup = (props: TCollapseGroupProps): JSX.Element => {
  const { items, singleSelection, titleProps = {} } = props
  const { size, color } = titleProps
  const [openValues, setOpenValues] = useState<TCollapseValue[]>(
    items.filter((item: TCollapseItem) => item.isOpen).map((item) => item.value)
  )

  const onCollapseSelect = (value: TCollapseValue) => {
    if (singleSelection) {
      setOpenValues([value])
    } else {
      setOpenValues([...openValues, value])
    }
  }
  const onCollapseDeselect = (value: TCollapseValue) => {
    setOpenValues(openValues.filter((item) => item !== value))
  }

  return (
    <>
      {items.map(({ title, value, content }) => {
        const isOpen = openValues.indexOf(value) !== -1
        return (
          <CollapseItem
            isOpen={isOpen}
            key={value}
            title={{ size, color, text: title }}
            toggle={() => (isOpen ? onCollapseDeselect(value) : onCollapseSelect(value))}
          >
            {content}
          </CollapseItem>
        )
      })}
    </>
  )
}
