const TODO = 'todo';
const DOING = 'doing';
const DONE = 'done';

const toggle = {
  [TODO]: DOING,
  [DOING]: DONE,
  [DONE]: TODO,
};

const nextState = (state) => toggle[state];
const defaultState = () => TODO;

export { nextState, defaultState };
