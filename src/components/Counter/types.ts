export interface ICounterProps extends IFormCompProps {
  min?: number
  max?: number
  handleChange?: (value: number | undefined) => void
  counter?: number
  customError?: string
  label?: string
  required?: boolean
}
