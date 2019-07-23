import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import poster from '../../images/movie-poster.jpg';

export class Films extends Component {
  componentDidMount() {
    this.props.getMoves(this.props.sort, this.props.year, this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.sort !== prevProps.sort
      || this.props.year !== prevProps.year) {
      this.props.changePage(1)
      && this.props.getMoves(this.props.sort, this.props.year, this.props.page);
    }
    if (this.props.page !== prevProps.page) {
      this.props.getMoves(this.props.sort, this.props.year, this.props.page);
    }
    window.scrollTo(0, 0);
  }

  render() {
    const options = [
      { value: 'release_date', label: 'release date' },
      { value: 'popularity', label: 'popularity' },
      { value: 'revenue', label: 'revenue' },
      { value: 'vote_average', label: 'vote average' },
    ];
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1927; i -= 1) {
      years.push({ value: i, label: i });
    }
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
      <section className="films">
        <div className="content">
          <div className="films-inner">
            <nav className="films-navigation">
              <div className="films-sort">
                <h3 className="sort-title">Sort by</h3>
                <Select
                  className="films-sort-select"
                  onChange={(value) => { this.props.changeSort(value.value); }}
                  options={options}
                />
              </div>
              <div className="films-sort">
                <h3 className="sort-title">Year</h3>
                <Select
                  onChange={(year) => { this.props.changeYear(year.value); }}
                  options={years}
                />
              </div>
            </nav>
            <ul className="films-list">
              {this.props.items.map((item, index) => (
                <li className="films-list-item" key={index}>
                  <Link
                    to={`/details/${item.id}`}
                    onClick={() => this.props.getId(item.id) && console.log(item.id)}
                    className="films-list-item-link"
                  >
                    <p className="desc">{item.title}</p>
                    <img src={(item.poster_path === null) ? poster : `https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="poster" />
                  </Link>
                </li>
              ))}
            </ul>
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
          </div>
        </div>
      </section>
    );
  }
}

export default Films;
