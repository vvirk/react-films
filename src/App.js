import React, { Component } from 'react';
import Select from 'react-select';

export class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getMoves(this.props.sort, this.props.year, this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.sort !== prevProps.sort || this.props.year !== prevProps.year || this.props.page !== prevProps.page) {
      this.props.getMoves(this.props.sort, this.props.year, this.props.page);
    }
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
    for (let i = 2009; i <= currentYear; i++) {
      years.push({ value: i, label: i });
    }
    const allPages = [];
    const totalPages = this.props.total_pages;
    for (let i = 0; i <= totalPages; i++) {
      allPages.push(i);
    }
    const pages = [];
    const currentPage = this.props.page;
    if (currentPage < 6) {
      for (let i = 1; i <= 7; i++) {
        pages.push(i);
      }
      pages.push('...', totalPages - 1, totalPages);
    } else if (currentPage <= 7) {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
      }
      pages.push('...', totalPages - 1, totalPages);
    } else if (currentPage >= 8 && currentPage <= totalPages - 7) {
      pages.push(1, 2, '...');
      for (let i = currentPage - 3; i <= currentPage + 3; i++) {
        pages.push(i);
      }
      pages.push('...', totalPages - 1, totalPages);
    } else if (currentPage === totalPages - 6 ) {
      pages.push(1, 2, '...');
      for (let i = totalPages - 10; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage > totalPages - 6) {
      pages.push(1, 2, '...');
      for (let i = totalPages - 6; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    return (
      <div>
        <div>
          <Select
            onChange={(value) => { this.props.changeSort(value.value); }}
            options={options}
          />
        </div>
        <div>
          <Select
            onChange={(year) => { this.props.changeYear(year.value); }}
            options={years}
          />
        </div>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>
              {item.title}
              <br />
              <img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} alt="img" />
            </li>
          ))}
        </ul>
        <div>
          <ul className="pagination">
            {pages.map((page, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => { if (page !== '...') { this.props.changePage(page); } }}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
