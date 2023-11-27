import React from 'react'
import ReactPaginate from 'react-paginate'
import Icon from '../Icon'
import {
    NEXT_LABEL_DEFAULT_TEXT,
    PREVIOUS_LABEL_DEFAULT_TEXT,
    PAGE_RANGE_DISPLAYED
} from './consts'
import { TPaginationProps } from './types'
import '../../assets/styles/components/_pagination.scss'


export const Pagination = (props: TPaginationProps): JSX.Element | null => {
    const {
        nextLabel = NEXT_LABEL_DEFAULT_TEXT,
        prevLabel = PREVIOUS_LABEL_DEFAULT_TEXT,
        totalCount,
        handleChangePage,
        breakLabel = <Icon name="more" />,
        containerClassName = '',
        activeClassName = ''
    } = props
    const handlePageChange = (selected: { selected: number }) => {
        handleChangePage(selected.selected + 1)
    }
    return (
        <div id="container">
            <ReactPaginate
                pageCount={totalCount}
                pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                marginPagesDisplayed={1}
                onPageChange={handlePageChange}
                containerClassName={containerClassName || 'pagination'}
                activeClassName={activeClassName || 'active'}
                previousLabel={prevLabel}
                nextLabel={nextLabel}
                breakClassName="page-item"
                breakLinkClassName="page-link"
                breakLabel={breakLabel}
                initialPage={0}
            />
        </div>
    )
}










