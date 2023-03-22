import { useContext } from 'react'
import { FormContext, TFormContextProps } from './index'

export const WithFormFeedback = ({
  children
}: {
  children?: (context: TFormContextProps) => JSX.Element
}): JSX.Element | null => {
  const context = useContext(FormContext)

  return children ? children(context) : null
}
