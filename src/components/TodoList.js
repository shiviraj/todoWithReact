import React from 'react';
import uuid from 'uuid';
import TodoTitle from './TodoTitle';
import Tasks from './Tasks';
import AddTodo from './AddTodo';
import { nextState, defaultState } from './statuses';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], title: 'Todo' };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick(id) {
    this.setState(({ list }) => {
      const index = list.findIndex((item) => item.id === id);
      list[index].status = nextState(list[index].status);
      return { list };
    });
  }

  handleRemove(id) {
    this.setState(({ list }) => {
      return { list: list.filter((item) => item.id !== id) };
    });
  }

  handleAddItem(name) {
    this.setState(({ list }) => ({
      list: list.concat({ id: uuid(), name, status: defaultState() }),
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
        <Tasks
          list={this.state.list}
          handleClick={this.handleClick}
          handleRemove={this.handleRemove}
        />
        <AddTodo onSubmit={this.handleAddItem} value="" />
      </div>
    );
  }
}

export default TodoList;
