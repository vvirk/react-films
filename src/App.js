import React, { Component } from 'react';
import Select from 'react-select';

export class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getMoves(this.props.sort);
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
    const pages = [];
    for (let i = 1; i <= 10; i++) {
      pages.push(i);
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
          <ul>
            {pages.map((page, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => this.props.changePage(page)}
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
