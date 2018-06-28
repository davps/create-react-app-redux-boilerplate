import { connect } from 'react-redux';
import Basic from '../components/Basic';
import { addItem } from '../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(addItem(`Item ${new Date()}`))
  };
};

const BasicContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Basic);

export default BasicContainer;
