import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoves, data, changeSort } from './redux';

export class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getMoves(this.props.sort);
  }

  componentDidUpdate(prevProps) {
    if (this.props.sort !== prevProps.sort) {
      this.props.getMoves(this.props.sort);
    }
  }

  render() {
    const sortBy = ['release_date', 'popularity', 'revenue', 'vote_average', 'vote_count'];
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
const mapStateToProps = state => ({ items: state.items, sort: state.sort });
const mapDispatchToProps = { getMoves, data, changeSort };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
