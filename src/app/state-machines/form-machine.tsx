import { createMachine } from 'xstate';
import { State } from './state';

const formMachine = createMachine({
  id: 'form',
  initial: State.INITIAL,
  states: {
    initial: {
      on: { SUBMIT: State.LOADING, ERROR: State.ERROR },
    },
    loading: {
      on: {
        SUCCESS: State.SUCCESS,
        ERROR: State.ERROR,
      },
    },
    success: {
      after: {
        4000: State.INITIAL,
      },
    },
    error: {
      after: {
        4000: State.INITIAL,
      },
    },
  },
});

export default formMachine;
