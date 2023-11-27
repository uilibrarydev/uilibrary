import React from 'react'
import { Icon, Pagination as PaginationComp } from '../components'
export default {
    title: 'Pagination',
    component: PaginationComp,
    argTypes: {}
}
const Template = (args) => (
    <PaginationComp
        {...args}
        handleChangePage={(item) => {
            console.log(item)
        }}
        nextLabel={<Icon name="arrow-right" />}
        prevLabel={<Icon name="arrow-left" />}
        totalCount={100}
        breakLabel={<Icon name="more" />}
        containerClassName=""
    />
)
export const Pagination = Template.bind({})