import React, { Component } from 'react';

export class FilmsPagination extends Component {
  state

  render() {
    const totalPages = this.props.totalPages;
    const pages = [];
    const currentPage = this.props.page;
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
                className="pagination-number"
                type="button"
                title={prew}
                onClick={() => { this.props.changePage(prew); }}
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
                  className={(this.props.page === page) ? 'pagination-number pagination-number-active' : 'pagination-number'}
                  type="button"
                  onClick={() => { this.props.changePage(page); }}
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
                className="pagination-number"
                type="button"
                title={next}
                onClick={() => { this.props.changePage(next); }}
              >
                &#9658;
              </button>
            </li>
          ) : null }
      </ul>
    );
  }
}

export default FilmsPagination;
