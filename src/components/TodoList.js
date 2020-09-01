import React from 'react';
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
  }

  handleClick(id) {
    this.setState((state) => {
      const newList = state.list.map((item) => ({ ...item }));
      newList[id].status = nextState(newList[id].status);
      return { list: newList };
    });
  }

  handleAddItem(item) {
    this.setState(({ list }) => ({
      list: list.concat({ name: item, status: defaultState() }),
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
        <Tasks list={this.state.list} handleClick={this.handleClick} />
        <AddTodo onSubmit={this.handleAddItem} value="" />
      </div>
    );
  }
}

export default TodoList;
