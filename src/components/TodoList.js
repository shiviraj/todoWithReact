import React, { useReducer } from 'react';
import TodoTitle from './TodoTitle';
import Tasks from './Tasks';
import AddTodo from './AddTodo';
import reducer from './reducer';

const initialState = { title: 'Todo', list: [] };

const TodoList = () => {
  const [{ title, list }, dispatch] = useReducer(reducer, initialState);

  const changeStatus = (id) => dispatch({ type: 'UPDATE_STATUS', id });
  const removeTask = (id) => dispatch({ type: 'REMOVE_TASK', id });
  const handleAddItem = (name) => dispatch({ type: 'ADD_TODO', name });
  const handleTitle = (newTitle) =>
    dispatch({ type: 'UPDATE_TITLE', title: newTitle });

  return (
    <div className="app">
      <TodoTitle
        handleTitle={handleTitle}
        handleRemoveAll={() => dispatch({ type: 'REMOVE_ALL' })}
        title={title}
      />
      <Tasks list={list} handleClick={changeStatus} handleRemove={removeTask} />
      <AddTodo onSubmit={handleAddItem} value="" />
    </div>
  );
};

export default TodoList;
