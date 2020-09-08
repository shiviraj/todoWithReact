import uuid from 'uuid';
import { nextState, defaultState } from './statuses';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTask = { id: uuid(), name: action.name, status: defaultState() };
      return { ...state, list: state.list.concat(newTask) };
    case 'UPDATE_TITLE':
      return { ...state, title: action.title };
    case 'REMOVE_ALL':
      return { ...state, list: [] };
    case 'UPDATE_STATUS':
      const list = state.list.slice();
      const index = list.findIndex((item) => item.id === action.id);
      list[index].status = nextState(list[index].status);
      return { ...state, list };
    case 'REMOVE_TASK':
      const newList = state.list.filter((item) => item.id !== action.id);
      return { ...state, list: newList };
    default:
      return state;
  }
};

export default reducer;
