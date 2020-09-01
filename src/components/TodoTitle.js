import React from 'react';
import AddTodo from './AddTodo';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInputOpen: false, value: props.title };
    this.toggleStyle = this.toggleStyle.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  toggleStyle() {
    this.setState(({ isInputOpen }) => ({ isInputOpen: !isInputOpen }));
  }

  handleTitle(title) {
    this.props.handleTitle(title);
    this.toggleStyle();
    this.setState(() => ({ value: title }));
  }

  render() {
    const content = <h1 onClick={this.toggleStyle}>{this.state.value}</h1>;

    const input = (
      <AddTodo onSubmit={this.handleTitle} value={this.state.value} />
    );

    return (
      <div className="title">{this.state.isInputOpen ? input : content}</div>
    );
  }
}

export default TodoTitle;
