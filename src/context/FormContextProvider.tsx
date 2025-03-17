import type { JSX } from 'react'
import { useContext } from 'react'
import type { TFormContextProps } from './types'
import { FormContext } from './types'

export const WithFormFeedback = ({
  children
}: {
  children?: (context: TFormContextProps) => JSX.Element | null
}): JSX.Element | null => {
  const context = useContext(FormContext)

  return children ? children(context) : null
}
