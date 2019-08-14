import React from 'react';
import queryString from 'query-string';
import Select from 'react-select';
import { addParam } from '../../utils/addParam';

export const FilmsNav = (props) => {
  const params = queryString.parse(props.location.search);
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
          onChange={(sort) => { addParam(params, 'sort_by', sort.value, 'page', 1); }}
          options={options}
        />
      </div>
      <div className="films-sort">
        <h3 className="sort-title">Year</h3>
        <Select
          onChange={(year) => { addParam(params, 'year', year.value, 'page', 1); }}
          options={years}
        />
      </div>
    </nav>
  );
};

export default FilmsNav;
