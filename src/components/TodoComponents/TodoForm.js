import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ''
    };
  }

  handleChanges = e => {
    this.setState({
      todoName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoTask !== '') {
      this.props.addTodo(this.state.todoName);
      this.setState({
        todoName: ''
      });
    }
  };

  render() {
    console.log(this.state.todoName);
    return (

        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChanges}
            type="text"
            placeholder="...todo"
            value={this.state.todoName}
          />
          <button>Add Todo</button>
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </form>

    );
  }
}

export default TodoForm;
