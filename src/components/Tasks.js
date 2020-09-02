import React from 'react';
import Task from './Task';

export default (props) => {
  const list = props.list.map((item) => (
    <Task
      key={item.id}
      handleClick={() => props.handleClick(item.id)}
      handleRemove={() => props.handleRemove(item.id)}
      value={item}
    />
  ));
  return <div className="list">{list}</div>;
};
