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
import classNames from 'classnames'
import Text from '../Text'
import SingleSelect from '../Select/SingleSelect'

export const Pagination = (props: TPaginationProps): JSX.Element | null => {
    const {
        labels = {
            next: NEXT_LABEL_DEFAULT_TEXT,
            previous: PREVIOUS_LABEL_DEFAULT_TEXT
        },
        totalCount,
        page = 2,
        handleChangePage,
        breakLabel = <Icon name="more" />,
        classname = '',
        activeClassName = '',
        size = 'large'
    } = props
    const handlePageChange = (selected: { selected: number }) => {
        handleChangePage(selected.selected + 1)
    }
    return (
        <div className="pagination-wrapper flexbox git status">
            <div className="pagination-wrapper__info flexbox align-items--center mr-24">
                <div className="flexbox align-items--center mr-24">
                    <Text type={'secondary'} className={'mr-8'}>
                        <></>
                        {/* Rows per page */}
                    </Text>
                    {/* <SingleSelect options={[]} /> */}
                </div>
                <Text type={'secondary'}>
                    <>
                        {/* {page === 1 ? '' : page - 1}1 - {+`${page}0` > totalCount ? totalCount : `${page}0`} of{' '} */}
                        {/* {totalCount} */}
                    </>
                </Text>
            </div>
            <ReactPaginate
                pageCount={totalCount}
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
            />
        </div>
    )
}
