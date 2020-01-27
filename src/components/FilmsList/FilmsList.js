import React from 'react';
import { Link } from 'react-router-dom';
import poster from '../../images/movie-poster.jpg';

export const FilmsList = ({ items }) => (
    <ul className="films-list">
      {items.map((item, index) => (
        <li className="films-list-item" key={index}>
          <Link
            to={`/details/${item.id}`}
            className="films-list-item-link"
          >
            <p className="desc">{item.title}</p>
            <img
              src={!item.poster_path
                ? poster
                : `https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt="poster"
            />
          </Link>
        </li>
      ))}
    </ul>
  );

export default FilmsList;
