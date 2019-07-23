import { connect } from 'react-redux';
import {
  getMoves,
  changeSort,
  changeYear,
  changePage,
  getId,
} from '../actions/index';
import { Films } from '../components/Films/Films';

const mapStateToProps = state => ({
  items: state.items,
  sort: state.sort,
  year: state.year,
  page: state.page,
  totalPages: state.totalPages,
});
const mapDispatchToProps = {
  getMoves,
  changeSort,
  changeYear,
  changePage,
  getId,
};

export const FilmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Films);

export default FilmsContainer;
