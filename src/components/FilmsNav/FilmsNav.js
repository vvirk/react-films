import React, { Component } from 'react';
import Select from 'react-select';

export class FilmsNav extends Component {
  state

  render() {
    const options = [
      { value: 'release_date', label: 'Release date' },
      { value: 'popularity', label: 'Popularity' },
      { value: 'revenue', label: 'Revenue' },
      { value: 'vote_average', label: 'Vote average' },
    ];
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1927; i -= 1) {
      years.push({ value: i, label: i });
    }
    return (
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
    );
  }
}

export default FilmsNav;
