import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import poster from '../../images/movie-poster.jpg';

export class FilmsList extends Component {
  state

  render() {
    return (
      <ul className="films-list">
        {this.props.items.map((item, index) => (
          <li className="films-list-item" key={index}>
            <Link
              to={`/details/${item.id}`}
              onClick={() => this.props.getId(item.id)}
              className="films-list-item-link"
            >
              <p className="desc">{item.title}</p>
              <img src={(item.poster_path === null) ? poster : `https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="poster" />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default FilmsList;
