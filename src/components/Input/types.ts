declare type InputCustomPropTypes = {
  className?: string
  value?: string
  error?: string
  showError?: boolean
  label?: string
  style?: Record<string, string>
  onChange?: (event: TInputChangeEventType) => void
}

export type InputPropTypes = InputCustomPropTypes & React.HTMLProps<HTMLInputElement>
