import React, { useState } from 'react';
import { mapPages } from 'src/helpers/parse';
import { createClass } from 'src/utils/utils';
import { Button } from '..';
import './Pagination.scss';
function Pagination({
  totalPages = 1,
  currentPage = 1,
  onChangePage,
  maxPage = 6,
  minPage = 0,
}) {
  let pages = mapPages(totalPages);
  const rangePageNumber = 5;
  const [maxPageLimit, setMaxPageLimit] = useState(maxPage);
  const [minPageLimit, setMinPageLimit] = useState(minPage);

  const nextPage = () => {
    let page = +currentPage + 1;
    if (page > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + rangePageNumber);
      setMinPageLimit(minPageLimit + rangePageNumber);
    }

    onChangePage(page);
  };

  const prevPage = () => {
    if ((currentPage - 1) % rangePageNumber === 0) {
      setMaxPageLimit(maxPageLimit - rangePageNumber);
      setMinPageLimit(minPageLimit - rangePageNumber);
    }

    if (currentPage > 1) {
      let page = currentPage - 1;
      onChangePage(page);
    }
  };

  return (
    <nav className="wrapper-pagination">
      <ul className="pagination">
        <li className="page-item">
          <Button
            onClick={prevPage}
            className="page-link"
            aria-label="Previous"
            title={<span aria-hidden="true">&laquo;</span>}
            disabled={currentPage <= 1}
          />
        </li>

        {minPageLimit >= 1 && (
          <li className="page-item">
            <Button
              onClick={prevPage}
              className="page-link"
              title={<span>&hellip;</span>}
            />
          </li>
        )}

        {pages.map((page, index) => {
          if (page > minPageLimit && page <= maxPageLimit)
            return (
              <li key={index} className="page-item">
                <Button
                  onClick={() => onChangePage(page)}
                  title={page}
                  customClass={createClass([
                    'page-link',
                    page === currentPage ? 'active' : '',
                  ])}
                />
              </li>
            );

          return null;
        })}
        {pages.length > maxPageLimit && (
          <li className="page-item">
            <Button
              onClick={nextPage}
              className="page-link"
              title={<span>&hellip;</span>}
            />
          </li>
        )}
        <li className="page-item">
          <Button
            onClick={nextPage}
            className="page-link"
            aria-label="Previous"
            title={<span aria-hidden="true">&raquo;</span>}
            disabled={currentPage === totalPages}
          />
        </li>
      </ul>
    </nav>
  );
}

export default React.memo(Pagination);
