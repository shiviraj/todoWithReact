import React from 'react';

export default (props) => (
  <div className="item">
    <div className={props.value.complete ? 'complete' : 'incomplete'}></div>
    <div onClick={props.handleClick}>{props.value.name}</div>
  </div>
);
