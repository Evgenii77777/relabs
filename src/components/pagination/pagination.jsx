import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { UsersTable } from "../table/users-table";

export const PaginatedItems = ({ itemsPerPage, onDelete, users }) => {
  let items = users;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <UsersTable users={currentItems} onDelete={onDelete} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="pagination__item"
        activeClassName="pagination__item--active"
        disabledClassName="pagination__item--disabled"
      />
    </div>
  );
};
