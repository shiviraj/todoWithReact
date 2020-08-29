import React from 'react';
import Item from './Item';

export default (props) => {
  const list = props.items.map((item, index) => (
    <Item
      key={index}
      handleClick={() => props.handleClick(index)}
      value={item}
    />
  ));
  return <div className="list">{list}</div>;
};
