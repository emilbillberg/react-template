import { COUNTER_INCREMENT } from '../../constants.js';

const incrementCounter = () => ({
  type: COUNTER_INCREMENT,
});

export {
  incrementCounter,
}