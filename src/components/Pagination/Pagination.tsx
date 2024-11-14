import React from 'react'
import ReactPaginate from 'react-paginate'
import { PAGE_RANGE_DISPLAYED } from './consts'
import type { TPaginationProps } from './types'
import classNames from 'classnames'
import IconChevronRight from '../SVGIcons/IconChevronRight'
import IconChevronLeft from '../SVGIcons/IconChevronLeft'
import IconMore from '../SVGIcons/IconMore'
import { ICON_SIZE_MAPPING } from './consts'

export const Pagination = (props: TPaginationProps): JSX.Element | null => {
  const {
    totalCount,
    handleChangePage,
    classname = '',
    size = 'large',
    pageSize,
    disableInitialCallback = false,
    page,
    breakLabel = <IconMore size={ICON_SIZE_MAPPING[size]} />,
    labels = {
      previous: <IconChevronLeft size={ICON_SIZE_MAPPING[size]} />,
      next: <IconChevronRight size={ICON_SIZE_MAPPING[size]} />
    }
  } = props

  const handlePageChange = ({ selected }: { selected: number }) => {
    handleChangePage(selected + 1)
  }

  return (
    <div className="pagination-wrapper flexbox">
      <ReactPaginate
        pageCount={Math.ceil(totalCount / pageSize)}
        disableInitialCallback={disableInitialCallback}
        pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={classNames(`pagination pagination--${size}`, classname)}
        activeClassName={'active'}
        previousLabel={labels?.previous}
        nextLabel={labels?.next}
        breakClassName="pagination__more"
        breakLinkClassName="pagination__more__link"
        breakLabel={breakLabel}
        {...(page ? { forcePage: page - 1 } : {})}
      />
    </div>
  )
}
