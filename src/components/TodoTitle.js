import React from 'react';
import AddTodo from './AddTodo';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
    this.toggleEditable = this.toggleEditable.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  toggleEditable() {
    this.setState(({ isEditable }) => ({ isEditable: !isEditable }));
  }

  handleTitle(title) {
    this.props.handleTitle(title);
    this.toggleEditable();
  }

  render() {
    const content = <h1 onClick={this.toggleEditable}>{this.props.title}</h1>;

    const input = (
      <AddTodo onSubmit={this.handleTitle} value={this.props.title} />
    );

    return (
      <div className="title">{this.state.isEditable ? input : content}</div>
    );
  }
}

export default TodoTitle;
