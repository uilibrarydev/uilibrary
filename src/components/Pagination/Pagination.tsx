import React from 'react'
import ReactPaginate from 'react-paginate'
import { Icon } from '../Icon'
import { PAGE_RANGE_DISPLAYED } from './consts'
import { TPaginationProps } from './types'
import classNames from 'classnames'
import IconChevronRight from '../SVGIcons/IconChevronRight'
import IconChevronLeft from '../SVGIcons/IconChevronLeft'

export const Pagination = (props: TPaginationProps): JSX.Element | null => {
  const {
    labels = {
      next: <IconChevronRight size={'small'} />,
      previous: <IconChevronLeft size={'small'} />
    },
    totalCount,
    handleChangePage,
    breakLabel = <Icon name="more" />,
    classname = '',
    size = 'large',
    pageSize,
    disableInitialCallback = false,
    page
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
        activeClassName={classname || 'active'}
        previousLabel={labels?.previous}
        nextLabel={labels?.next}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        breakLabel={breakLabel}
        initialPage={0}
        {...(page ? { forcePage: page - 1 } : {})}
      />
    </div>
  )
}
