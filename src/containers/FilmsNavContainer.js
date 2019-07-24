import { connect } from 'react-redux';
import {
  changeSort,
  changeYear,
} from '../actions/index';
import { FilmsNav } from '../components/FilmsNav/FilmsNav';

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
  changeSort,
  changeYear,
};

export const FilmsNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsNav);

export default FilmsNavContainer;
