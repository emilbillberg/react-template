import { CounterTypes } from '../constants/constants';

export interface IncrementAction {
  type: CounterTypes.INC;
}

export interface DecrementAction {
  type: CounterTypes.DEC;
}

export type CounterActionTypes = IncrementAction | DecrementAction;

export const incrementCounter = () : IncrementAction => ({
  type: CounterTypes.INC,
});