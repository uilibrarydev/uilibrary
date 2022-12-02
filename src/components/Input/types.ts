declare type InputCustomPropTypes = {
  className?: string
  value?: string
  onChange?: (event: TInputChangeEventType) => void
}

export type InputPropTypes = InputCustomPropTypes & React.HTMLProps<HTMLInputElement>
