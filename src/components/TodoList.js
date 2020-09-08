import React, { useState, useEffect } from 'react';
import TodoTitle from './TodoTitle';
import Tasks from './Tasks';
import AddTodo from './AddTodo';
import apiCall from './apiCall';

const setNewState = (setState, action) => apiCall(action).then(setState);

const TodoList = () => {
  const [{ title, list }, setState] = useState({ title: 'Todo', list: [] });
  const dispatch = setNewState.bind(null, setState);
  const changeStatus = (id) => dispatch({ type: 'UPDATE_STATUS', id });
  const removeTask = (id) => dispatch({ type: 'REMOVE_TASK', id });
  const handleAddItem = (name) => dispatch({ type: 'ADD_TODO', name });
  const handleTitle = (t) => dispatch({ type: 'UPDATE_TITLE', title: t });
  const removeAll = () => dispatch({ type: 'REMOVE_ALL' });

  useEffect(() => {
    dispatch({});
  }, []);

  return (
    <div className="app">
      <TodoTitle
        handleTitle={handleTitle}
        handleRemoveAll={removeAll}
        title={title}
      />
      <Tasks list={list} handleClick={changeStatus} handleRemove={removeTask} />
      <AddTodo onSubmit={handleAddItem} value="" />
    </div>
  );
};

export default TodoList;
