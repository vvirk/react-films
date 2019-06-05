import { connect } from 'react-redux';
import {
  getMoves,
  data,
  changeSort,
  changeYear,
} from './redux';
import { App } from './App';

const mapStateToProps = state => ({
  items: state.items,
  sort: state.sort,
  year: state.year,
});
const mapDispatchToProps = {
  getMoves,
  data,
  changeSort,
  changeYear,
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
