import { connect } from 'react-redux';
import { changePage } from '../actions/index';
import { FilmsPagination } from '../components/FilmsPagination/FilmsPagination';

const mapStateToProps = state => ({
  totalPages: state.totalPages,
  page: state.page,
});
const mapDispatchToProps = {
  changePage,
};
export const FilmsPaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsPagination);

export default FilmsPaginationContainer;
