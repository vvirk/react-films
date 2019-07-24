import { connect } from 'react-redux';
import { getId } from '../actions/index';
import { FilmsList } from '../components/FilmsList/FilmsList';

const mapStateToProps = state => ({
  items: state.items,
});
const mapDispatchToProps = {
  getId,
};
export const FilmsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsList);

export default FilmsListContainer;
