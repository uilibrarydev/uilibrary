import React from 'react'

import { TBreadCrumbItem, TBreadCrumbProps } from './types'
import '../../assets/styles/components/_breadcrumb.scss'

export const BreadcrumbComp = (props: TBreadCrumbProps): JSX.Element | null => {
  const { selectedValue, breadCrumbItems, className = '', onSelect } = props

  return (
    <div className={`breadcrumb ${className}`}>
      {breadCrumbItems.map((itemInfo: TBreadCrumbItem) => {
        return (
          <span className="breadcrumb__item" key={itemInfo.value}>
            <span
              className={`breadcrumb__item__inner ${
                selectedValue === itemInfo.value ? 'selected' : ''
              }`}
              onClick={() => onSelect(itemInfo.value)}
            >
              {itemInfo.label}
            </span>
          </span>
        )
      })}
    </div>
  )
}

export default BreadcrumbComp
