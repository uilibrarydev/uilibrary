export type TPaginationProps = {
  nextLabel?: string | JSX.Element
  prevLabel?: string | JSX.Element
  totalCount: number
  page: number
  handleChangePage: (pageNumber: number) => void
  breakLabel?: JSX.Element
  containerClassName?: string
  activeClassName?: string
  size?: 'large' | 'medium' | 'small'
}
