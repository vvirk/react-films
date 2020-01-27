import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FilmsPagination } from '../components/FilmsPagination/FilmsPagination';

const mapStateToProps = state => ({
  totalPages: state.totalPages,
  page: state.page,
});

const mapDispatchToProps = {};

export const FilmsPaginationContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsPagination));

export default FilmsPaginationContainer;
