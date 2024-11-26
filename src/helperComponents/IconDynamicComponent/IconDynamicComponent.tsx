import type { ReactElement } from 'react'
import React, { Suspense } from 'react'
import { IconComponentMapping } from './constants'

interface IconDynamicComponentProps {
  componentName: string
  size?: string
  type?: string
  className?: string
}

export const IconDynamicComponent = ({
  componentName,
  size = 'small',
  type = 'inverse',
  className
}: IconDynamicComponentProps): ReactElement | null => {
  if (!componentName || !IconComponentMapping[componentName]) {
    return null
  }

  // Dynamically load the component based on the componentName prop
  const Component = IconComponentMapping[componentName]

  return (
    <Suspense fallback={null}>
      <Component type={type} size={size} className={className} />
    </Suspense>
  )
}

export default IconDynamicComponent
