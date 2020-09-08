import React, { useState } from 'react';
import AddTodo from './AddTodo';

const TodoTitle = (props) => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEditable = () => setIsEditable((e) => !e);

  const handleTitle = (title) => {
    props.handleTitle(title);
    toggleEditable();
  };

  const content = (
    <div>
      <h1 onClick={toggleEditable}>{props.title}</h1>
      <div className="remove-all" onClick={props.handleRemoveAll}>
        X
      </div>
    </div>
  );

  const input = <AddTodo onSubmit={handleTitle} value={props.title} />;

  return <div className="title">{isEditable ? input : content}</div>;
};

export default TodoTitle;
