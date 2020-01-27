import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
  getMoves,
  toggleIsFetching,
} from '../actions/index';
import { Films } from '../components/Films/Films';

const mapStateToProps = state => ({
  sort: state.sort,
  year: state.year,
  page: state.page,
  isFetching: state.isFetching,
});

const mapDispatchToProps = {
  getMoves,
  toggleIsFetching,
};

export const FilmsContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Films));

export default FilmsContainer;
