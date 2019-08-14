import React from 'react';
import queryString from 'query-string';
import { addParam } from '../../utils/addParam';

export const FilmsPagination = (props) => {
  const params = queryString.parse(props.location.search);
  const totalPages = props.totalPages;
  const pages = [];
  const currentPage = (params.page) ? +params.page : 1;
  const separator = '...';
  const next = currentPage + 1;
  const prew = currentPage - 1;
  if (currentPage < 6) {
    for (let i = 1; i <= 7; i += 1) {
      pages.push(i);
    }
    pages.push(separator, totalPages - 1, totalPages);
  } else if (currentPage <= 7) {
    for (let i = 1; i <= 10; i += 1) {
      pages.push(i);
    }
    pages.push(separator, totalPages - 1, totalPages);
  } else if (currentPage >= 8 && currentPage <= totalPages - 7) {
    pages.push(1, 2, '...');
    for (let i = currentPage - 3; i <= currentPage + 3; i += 1) {
      pages.push(i);
    }
    pages.push(separator, totalPages - 1, totalPages);
  } else if (currentPage === totalPages - 6) {
    pages.push(1, 2, separator);
    for (let i = totalPages - 10; i <= totalPages; i += 1) {
      pages.push(i);
    }
  } else if (currentPage > totalPages - 6) {
    pages.push(1, 2, separator);
    for (let i = totalPages - 6; i <= totalPages; i += 1) {
      pages.push(i);
    }
  }
  return (
    <ul className="pagination">
      {(currentPage > 1)
        ? (
          <li className="pagination-item">
            <button
              type="button"
              className="pagination-number"
              title={prew}
              onClick={() => addParam(params, 'page', prew)}
            >
              &#9668;
            </button>
          </li>
        ) : null }
      {pages.map((page, index) => {
        if (page !== separator) {
          return (
            <li className="pagination-item" key={index}>
              <button
                type="button"
                className={(currentPage === page) ? 'pagination-number pagination-number-active' : 'pagination-number'}
                onClick={() => addParam(params, 'page', page)}
              >
                {page}
              </button>
            </li>
          );
        }
        return (
          <span>
            {page}
          </span>
        );
      })}
      {(currentPage >= 1 && currentPage < totalPages - 1)
        ? (
          <li className="pagination-item">
            <button
              type="button"
              className="pagination-number"
              title={next}
              onClick={() => addParam(params, 'page', next)}
            >
              &#9658;
            </button>
          </li>
        ) : null }
    </ul>
  );
};

export default FilmsPagination;
