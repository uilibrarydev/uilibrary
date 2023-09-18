import React, { useEffect, useState } from 'react'
import { CollapseItem } from '..'
import '../../../assets/styles/components/_collapse.scss'

import { TCollapseGroupProps, TColapseItem, TCollapseValue } from '../types'

export const CollapseGroup = (props: TCollapseGroupProps): JSX.Element => {
  const { items, singleSelection, titleProps = {} } = props
  const { size, color } = titleProps
  const [openValues, setOpenValues] = useState<TCollapseValue[]>([])

  useEffect(() => {
    const initialOpenItems = items
      .filter((item: TColapseItem) => item.isOpen)
      .map((item) => item.value)
    setOpenValues(initialOpenItems)
  }, [items])

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
      {items.map((colapseItem) => {
        const { title, value, content } = colapseItem
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
