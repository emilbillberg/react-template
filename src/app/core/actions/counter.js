import { COUNTER_INCREMENT } from '../constants/constants.js';

const incrementCounter = () => ({
  type: COUNTER_INCREMENT,
});

export {
  incrementCounter,
}