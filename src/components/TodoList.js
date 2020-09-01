import React from 'react';
import TodoTitle from './TodoTitle';
import Tasks from './Tasks';
import AddTodo from './AddTodo';
import { nextState, defaultState } from './statuses';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], title: 'Todo' };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  handleClick(id) {
    const newItems = this.state.items.map((item, index) => {
      if (id === index) item.status = nextState(item.status);
      return item;
    });
    this.setState({ items: newItems });
  }

  handleAddItem(item) {
    this.setState(({ items }) => ({
      items: items.concat({ name: item, status: defaultState() }),
    }));
  }

  handleTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div className="app">
        <TodoTitle
          handleTitle={this.handleTitle}
          title={this.state.title}
          default={this.state.title}
        />
        <Tasks items={this.state.items} handleClick={this.handleClick} />
        <AddTodo onSubmit={this.handleAddItem} value="" />
      </div>
    );
  }
}

export default TodoList;
