import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoves, data, changeSort, changeYear } from './redux';

export class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getMoves(this.props.sort);
  }

  componentDidUpdate(prevProps) {
    if (this.props.sort !== prevProps.sort || this.props.year !== prevProps.year) {
      this.props.getMoves(this.props.sort, this.props.year);
    }
  }

  render() {
    const sortBy = ['release_date', 'popularity', 'revenue', 'vote_average', 'vote_count'];
    const years = [];
    for (let i = 2009; i < 2019; i++) {
      years.push(i);
    };
    console.log(years);
    return (
      <div>
        <div>
          <ul>
            {sortBy.map((item, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => this.props.changeSort(item)}
              >
                {item}
              </button>
            </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {years.map((year, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => this.props.changeYear(year)}
              >
                {year}
              </button>
            </li>
            ))}
          </ul>
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
      </div>
    );
  }
}
const mapStateToProps = state => ({ items: state.items, sort: state.sort, year: state.year });
const mapDispatchToProps = { getMoves, data, changeSort, changeYear };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
