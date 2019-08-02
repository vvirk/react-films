import React, { Component } from 'react';
import queryString from 'query-string';
import { FilmsNavContainer } from '../../containers/FilmsNavContainer';
import { FilmsListContainer } from '../../containers/FilmsListContainer';
import { FilmsPaginationContainer } from '../../containers/FilmsPaginationContainer';

export class Films extends Component {
  componentDidMount() {
    if (this.props.location.search) {
      const params = queryString.parse(this.props.location.search);
      this.props.getMoves(params.sort_by, params.year, params.page);
    } else {
      this.props.getMoves(this.props.sort, this.props.year, this.props.page);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.sort !== prevProps.sort
      || this.props.year !== prevProps.year) {
      this.props.getMoves(this.props.sort, this.props.year);
    }
    if (this.props.page !== prevProps.page) {
      this.props.getMoves(this.props.sort, this.props.year, this.props.page);
    }
    if (this.props.location.search !== prevProps.location.search) {
      const params = queryString.parse(this.props.location.search);
      console.log(this.props.location.search);
      console.log(prevProps.location.search);
      if (this.props.page !== +params.page && this.props.year !== +params.year) {
        this.props.changePage(+params.page) && this.props.changeYear(+params.year);
      } else if (this.props.page !== +params.page && this.props.sort !== params.sort_by) {
        this.props.changePage(+params.page) && this.props.changeSort(params.sort_by);
      } else if (this.props.year !== +params.year) {
        this.props.changeYear(+params.year);
      } else if (this.props.page !== +params.page) {
        this.props.changePage(+params.page);
      } else if (this.props.sort !== params.sort_by) {
        this.props.changeSort(params.sort_by);
      }
    }
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props);
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
