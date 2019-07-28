import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDetails } from '../actions/index';
import { Details } from '../components/Details/Details';

const mapStateToProps = state => ({
  id: state.id,
  details: state.details,
});
const mapDispatchToProps = {
  getDetails,
};

export const DetailsContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details));

export default DetailsContainer;
