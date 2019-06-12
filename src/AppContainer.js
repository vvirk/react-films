import { connect } from 'react-redux';
import {
  getMoves,
  data,
  changeSort,
  changeYear,
  changePage,
} from './redux';
import { App } from './App';

const mapStateToProps = state => ({
  items: state.items,
  sort: state.sort,
  year: state.year,
  page: state.page,
});
const mapDispatchToProps = {
  getMoves,
  data,
  changeSort,
  changeYear,
  changePage,
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
