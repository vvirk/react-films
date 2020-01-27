import React, { Component } from 'react';
import { Preloader } from '../Preloader/Preloader';
// images
import poster from '../../images/movie-poster.jpg';

export class Details extends Component {
  componentDidMount() {
    const { toggleIsFetching,getDetails, match } = this.props;
  
    toggleIsFetching(true);
    getDetails(match.params.id);
  }

  render() {
    const { details, isFetching } = this.props;
    const {
      poster_path,
      title,
      release_date,
      tagline,
      vote_average,
      overview,
      genres,
     } = details;

    return (
      <>
        {isFetching && <Preloader />}
        <section className="details">
          <div className="content">
            <div className="details-inner">
              <div className="details-poster">
                <img
                  src={!poster_path
                    ? poster
                    : `https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt="poster"
                />
              </div>
              <div className="details-desc">
                <h1
                  className="title"
                >
                  {title}
                  <span>
                    {release_date && ` (${release_date.slice(0, 4)})`}
                  </span>
                </h1>
                <h2 className="subtitle">{tagline}</h2>
                <div className="rating" title="Vote average">
                  {vote_average}
                </div>
                <div className="desc desc-details">
                  <p>{overview}</p>
                </div>
                {genres && <h2 className="subtitle">Genres:</h2>}
                <ul className="details-list">
                  {genres && genres.map((genre, index) => (
                        <li
                          key={index}
                          className="details-list-item"
                        >
                          {genre.name}
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Details;
