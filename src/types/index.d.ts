declare type CallbackFnType = () => void

declare type TComponentProps = {
  error?: FieldError
  className?: string
  value: string
  onBlur?: CallbackFnType
  onChange: (value: React.FormEvent<HTMLInputElement>) => void
}

declare type TInputChangeEventType = React.FormEvent<HTMLInputElement>

declare type TFormItem = {
  component: (props: TComponentProps) => React.ReactElement
  placeholder: string
  name: string
}

declare type TEventType = MouseEvent | UIEvent<HTMLDivElement>

type TButtonEventTarget = EventTarget

interface TClickMouseEvent extends MouseEventHandler<HTMLButtonElement> {
  target: TButtonEventTarget
}
