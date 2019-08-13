import React, { Component } from 'react';
import poster from '../../images/movie-poster.jpg';

export class Details extends Component {
  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }

  render() {
    const { details } = this.props;
    console.log(this.props);
    return (
      <section className="details">
        <div className="content">
          <div className="details-inner">
            <div className="details-poster">
              <img
                src={(details.poster_path === null) ? poster : `https://image.tmdb.org/t/p/w300${details.poster_path}`}
                alt="poster"
              />
            </div>
            <div className="details-desc">
              <h1
                className="title"
              >
                {details.title}
                <span>
                  {(details.release_date) ? ` (${details.release_date.slice(0, 4)})` : null}
                </span>
              </h1>
              <h2 className="subtitle">{details.tagline}</h2>
              <div className="rating" title="Vote average">{details.vote_average}</div>
              <div className="desc desc-details">
                <p>{details.overview}</p>
              </div>
              {(details.genres) ? <h2 className="subtitle">Genres:</h2> : null}
              <ul className="details-list">
                {(details.genres)
                  ? details.genres.map(
                    (genre, index) => (
                      <li
                        key={index}
                        className="details-list-item"
                      >
                        {genre.name}
                      </li>
                    ),
                  ) : null}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
