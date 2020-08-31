import React from 'react';

export default (props) => (
  <div className="item">
    <div className={props.value.status}></div>
    <div onClick={props.handleClick}>{props.value.name}</div>
  </div>
);
