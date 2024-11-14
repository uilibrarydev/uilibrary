import type { ForwardedRef, ReactElement} from 'react';
import React, { forwardRef, useState } from 'react'
import { CollapseItem } from '../CollapseItem/CollapseItem'

import type { TCollapseGroupProps, TCollapseItem, TCollapseValue } from '../types'
import classNames from 'classnames'

export const CollapseGroup = forwardRef(
  (props: TCollapseGroupProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const { items, singleSelection, titleProps = {}, className } = props
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
      <div className={classNames('collapse-group', className)} ref={ref}>
        {items.map(({ id, title, value, content, dataId, iconProps }) => {
          const isOpen = openValues.indexOf(value) !== -1
          return (
            <CollapseItem
              className={'collapse-group__item'}
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
      </div>
    )
  }
)

CollapseGroup.displayName = 'CollapseGroup'
