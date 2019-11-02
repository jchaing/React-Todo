import React from 'react';
import { Button, Form, InputGroup, Input } from 'reactstrap';
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
    if (this.state.todoName !== '') {
      this.props.addTodo(this.state.todoName);
      this.setState({
        todoName: ''
      });
    }
  };

  render() {
    console.log(this.state.todoName);
    return (
      <>
        <Form className="mt-4" onSubmit={this.handleSubmit}>
          <InputGroup>
            <Input
              onChange={this.handleChanges}
              type="text"
              placeholder="Enter new todo here"
              value={this.state.todoName}
            />
            <Button color="success">Add Todo</Button>
          </InputGroup>
        </Form>
        <Button
          className="mt-4"
          color="danger"
          onClick={this.props.clearCompleted}
        >
          Clear Completed
        </Button>
      </>
    );
  }
}

export default TodoForm;
