import { connect } from 'react-redux';
import { incrementCounter } from './../core/actions/counter.js';
import Home from './home.js';
import './home.css';

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onIncrement: () => dispatch(incrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);