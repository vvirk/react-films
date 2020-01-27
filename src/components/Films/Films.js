import React, { Component } from 'react';
import queryString from 'query-string';
import { FilmsNavContainer } from '../../containers/FilmsNavContainer';
import { FilmsListContainer } from '../../containers/FilmsListContainer';
import { FilmsPaginationContainer } from '../../containers/FilmsPaginationContainer';
import { Preloader } from '../Preloader/Preloader';

export class Films extends Component {
  componentDidMount() {
    const { toggleIsFetching, location, getMoves, } = this.props;

    toggleIsFetching(true);
    if (location.search) {
      const params = queryString.parse(location.search);

      getMoves(params.sort_by, params.year, params.page);
    } else {
      getMoves();
    }
  }

  componentDidUpdate(prewProps) {
    const { toggleIsFetching, location, getMoves, } = this.props;

    if (location.search !== prewProps.location.search) {
      const params = queryString.parse(location.search);

      toggleIsFetching(true);
      getMoves(params.sort_by, params.year, params.page);
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { isFetching } = this.props;

    return (
      <>
        {isFetching && <Preloader />}
        <section className="films">
          <div className="content">
            <div className="films-inner">
              <FilmsNavContainer />
              <FilmsListContainer />
              <FilmsPaginationContainer />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Films;
