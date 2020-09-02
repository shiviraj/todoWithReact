import React from 'react';

export default (props) => (
  <div className="item">
    <div className={`task ${props.value.status}`} onClick={props.handleClick}>
      {props.value.name}
    </div>
    <div className="remove" onClick={props.handleRemove}>
      X
    </div>
  </div>
);
