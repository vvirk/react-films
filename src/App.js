import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getMoves } from './redux';

// App.js
export class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getMoves();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.result.map(re => (
            <li>
              {re.title}
              <br />
              <img src={`https://image.tmdb.org/t/p/w300${re.backdrop_path}`} alt="img" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({ result: state.result });
const mapDispatchToProps = { getMoves };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
