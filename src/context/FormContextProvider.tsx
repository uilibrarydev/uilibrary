import { useContext } from 'react'
import { FormContext } from './index'

export const WithFormFeedback = ({
  children
}: {
  children?: (setValue: TSetValue) => JSX.Element
}): JSX.Element | null => {
  const context = useContext(FormContext)

  return children ? children(context.setValue) : null
}
