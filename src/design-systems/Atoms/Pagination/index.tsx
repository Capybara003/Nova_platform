// components/Pagination.tsx
import React from 'react'
import ReactPaginate from 'react-paginate'

import { LeftArrowWhiteIcon, RightArrowWhiteIcon } from '../Icons'

import { PaginationProps } from './interface'

const Pagination: React.FC<PaginationProps> = ({ onPageChange, pageCount }) => {
  return (
    <div className="mt-[12px] flex items-center justify-center ">
      <ReactPaginate
        activeClassName={'pagination__link--active'}
        breakLabel="..."
        containerClassName={'pagination'}
        disabledClassName={'pagination__link--disabled'}
        forcePage={0}
        initialPage={0}
        nextLabel={<RightArrowWhiteIcon />}
        nextLinkClassName={'pagination__link'}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        previousLabel={<LeftArrowWhiteIcon />}
        previousLinkClassName={'pagination__link'}
        renderOnZeroPageCount={null}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default Pagination
