import React, { useEffect, useState } from 'react'
import { Collapse } from '..'
import '../../../assets/styles/components/_collapse.scss'

import { TCollapseGroupProps, TColapseItem, TCollapseValue } from '../types'

export const CollapseGroup = (props: TCollapseGroupProps): JSX.Element => {
  const { items, singleSelection, titleSize, titleColor } = props
  const [openValues, setOpenValues] = useState<TCollapseValue[]>([])

  useEffect(() => {
    const initialOpenItems = items.filter((item: TColapseItem) => item.isOpen)
    setOpenValues(initialOpenItems.map((item) => item.value))
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
          <Collapse
            title={title}
            isOpen={isOpen}
            key={value}
            titleSize={titleSize}
            titleColor={titleColor}
            toggle={() => (isOpen ? onCollapseDeselect(value) : onCollapseSelect(value))}
          >
            {content}
          </Collapse>
        )
      })}
    </>
  )
}
