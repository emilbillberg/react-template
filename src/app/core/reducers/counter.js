import { COUNTER_INCREMENT } from '../constants/constants.js';

const counter = (state = 1, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return ++state;
    default:
      return state;
  }
};

export default counter;