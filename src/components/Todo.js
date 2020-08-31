import React from 'react';
import Items from './Items';
import AddItem from './AddItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.statuses = ['todo', 'doing', 'done'];
    this.defaultStatus = 'todo';
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateState(status) {
    const index = this.statuses.findIndex((item) => item === status);
    const nextIndex = (index + 1) % this.statuses.length;
    return this.statuses[nextIndex];
  }

  handleClick(id) {
    const newItems = this.state.items.map((item, index) => {
      if (id === index) item.status = this.updateState(item.status);
      return item;
    });
    this.setState({ items: newItems });
  }

  handleAddItem(item) {
    this.setState(({ items }) => ({
      items: items.concat({ name: item, status: this.defaultStatus }),
    }));
  }

  render() {
    return (
      <div className="app">
        <h1>Todo</h1>
        <Items items={this.state.items} handleClick={this.handleClick} />
        <AddItem onSubmit={this.handleAddItem} />
      </div>
    );
  }
}

export default TodoList;
