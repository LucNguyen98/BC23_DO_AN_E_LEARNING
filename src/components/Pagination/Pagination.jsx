import React from 'react';
import { mapPages } from 'src/helpers/parse';
import { createClass } from 'src/utils/utils';
import { Button } from '..';
import './Pagination.scss';
function Pagination({ totalPages = 1, currentPage = 1, onChangePage }) {
  let pages = mapPages(totalPages);

  const nextPage = () => {
    let page = +currentPage + 1;
    onChangePage(page);
  };

  const prevPage = () => {
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

        {pages.map((page, index) => (
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
        ))}
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
