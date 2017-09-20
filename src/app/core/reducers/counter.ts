import { CounterTypes } from '../constants/constants';
import { CounterActionTypes } from '../actions/counter';
import CounterState from '../states/counter';

const initialState: CounterState = {
  count: 1,
}

const counter = (state: CounterState = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case CounterTypes.INC:
      return { ...state, count: state.count + 1  };
    case CounterTypes.DEC:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;