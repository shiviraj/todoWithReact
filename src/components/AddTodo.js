import React, { useState } from 'react';

const AddItem = (props) => {
  const [state, setState] = useState({ value: props.value, error: undefined });

  const handleChange = (event) => {
    setState({ value: event.target.value, error: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.value.trim()) {
      return setState({ error: "Field can't be empty!" });
    }
    props.onSubmit(state.value);
    setState({ value: '', error: undefined });
  };

  return (
    <form onSubmit={handleSubmit}>
      {state.error && <div className="error">{state.error}</div>}
      <input
        type="text"
        value={state.value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
};

export default AddItem;
