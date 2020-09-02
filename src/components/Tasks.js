import React from 'react';
import Task from './Task';

export default (props) => {
  const list = props.list.map((item, index) => (
    <Task
      key={index}
      handleClick={() => props.handleClick(index)}
      handleRemove={() => props.handleRemove(index)}
      value={item}
    />
  ));
  return <div className="list">{list}</div>;
};
