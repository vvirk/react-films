import React, { Component } from 'react';
import queryString from 'query-string';
import { FilmsNavContainer } from '../../containers/FilmsNavContainer';
import { FilmsListContainer } from '../../containers/FilmsListContainer';
import { FilmsPaginationContainer } from '../../containers/FilmsPaginationContainer';

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
    if (this.props.location.search !== prevProps.location.search) {
      const params = queryString.parse(this.props.location.search);
      this.props.getMoves(params.sort_by, params.year, params.page);
    }
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="films">
        <div className="content">
          <div className="films-inner">
            <FilmsNavContainer />
            <FilmsListContainer />
            <FilmsPaginationContainer />
          </div>
        </div>
      </section>
    );
  }
}

export default Films;
