export interface TTextAreaTypeProps {
  className?: string
  name?: string
  cols?: number
  row?: number
  label?: string | JSX.Element
  error?: string
  showError?: string
  onChange: (event: TTextAreaEventType) => void
}
