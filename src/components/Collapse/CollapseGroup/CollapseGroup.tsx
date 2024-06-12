import React, { ReactElement, useState } from 'react'
import { CollapseItem } from '../CollapseItem/CollapseItem'

import { TCollapseGroupProps, TCollapseItem, TCollapseValue } from '../types'

export const CollapseGroup = (props: TCollapseGroupProps): ReactElement => {
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
      {items.map(({ id, title, value, content, dataId, iconProps }) => {
        const isOpen = openValues.indexOf(value) !== -1
        return (
          <CollapseItem
            id={id}
            isOpen={isOpen}
            key={value}
            dataId={dataId}
            title={{ size, color, text: title }}
            toggle={() => (isOpen ? onCollapseDeselect(value) : onCollapseSelect(value))}
            labelLeftIconProps={iconProps}
          >
            {content}
          </CollapseItem>
        )
      })}
    </>
  )
}
