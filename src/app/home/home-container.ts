import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../core/states';
import Home, { OwnProps } from './home';
import { incrementCounter } from './../core/actions/counter';

interface StateFromProps {
  count: number;
}

interface DispatchFromProps {
  onIncrement: () => void;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) : StateFromProps => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps) : DispatchFromProps => ({
  onIncrement: () => dispatch(incrementCounter()),
});

export default connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Home);