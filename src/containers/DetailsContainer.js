import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
  getDetails,
  toggleIsFetching,
} from '../actions/index';
import { Details } from '../components/Details/Details';

const mapStateToProps = state => ({
  id: state.id,
  details: state.details,
  isFetching: state.isFetching,
});
const mapDispatchToProps = {
  getDetails,
  toggleIsFetching,
};

export const DetailsContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details));

export default DetailsContainer;
