export type TPaginationProps = {
  nextLabel?: string | JSX.Element
  prevLabel?: string | JSX.Element
  totalCount: number
  handleChangePage: (pageNumber: number) => void
  breakLabel?: JSX.Element
  containerClassName?: string
  activeClassName?: string
}