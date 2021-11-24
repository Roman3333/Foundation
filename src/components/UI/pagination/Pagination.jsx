import React from "react";
import { getPageArray } from "../../../utils/pages";

function Pagination({ totalPages, changePage, page }) {
  let pagesArray = getPageArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => {
        return (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
}

export default Pagination;
