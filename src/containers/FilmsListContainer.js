import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FilmsList } from '../components/FilmsList/FilmsList';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = {};

export const FilmsListContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsList));

export default FilmsListContainer;
