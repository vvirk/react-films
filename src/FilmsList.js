/* import React from 'react';

class FilmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=60c4a3ee893cd1db3cfe5838953ce4c1&language=en-US&page=1')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.results,
          });
        },
      );
  }

  render() {
    const { items } = this.state;
    return (
      <ul>
        {items.map(item => (
          <li>
            {item.title}
            <br />
            <img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} alt="img" />
          </li>
        ))}
      </ul>
    );
  }
}

export default FilmsList;
*/
