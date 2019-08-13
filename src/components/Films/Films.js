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
      this.props.getMoves();
    }
  }

  componentDidUpdate(prewProps) {
    if (this.props.location.search !== prewProps.location.search) {
      const params = queryString.parse(this.props.location.search);
      this.props.getMoves(params.sort_by, params.year, params.page);
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
