import { useContext } from 'react'
import { FormContext } from './index'

export const WithFormFeedback = ({
  children
}: {
  children: (setValue: TSetValue) => JSX.Element
}): JSX.Element => {
  const context = useContext(FormContext)

  return children(context.setValue)
}
