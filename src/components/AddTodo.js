import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value, error: undefined };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return this.setState({ error: "Field can't be empty!" });
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '', error: undefined });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.error && <div className="error">{this.state.error}</div>}
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          autoFocus
        />
      </form>
    );
  }
}

export default AddItem;
