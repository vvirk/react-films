import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FilmsNav } from '../components/FilmsNav/FilmsNav';

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export const FilmsNavContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsNav));

export default FilmsNavContainer;
