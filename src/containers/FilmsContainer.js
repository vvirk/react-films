import { connect } from 'react-redux';
import {
  getMoves,
  changePage,
} from '../actions/index';
import { Films } from '../components/Films/Films';

const mapStateToProps = state => ({
  sort: state.sort,
  year: state.year,
  page: state.page,
});
const mapDispatchToProps = {
  getMoves,
  changePage,
};

export const FilmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Films);

export default FilmsContainer;
