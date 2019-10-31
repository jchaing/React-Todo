import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import { data } from './data';
import "./components/TodoComponents/Todo.css"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  addTodo = todoTask => {
    console.log('add todo: ', todoTask);

    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: todoTask,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  toggleCompleted = todoId => {
    console.log(`toggleCompleted: `, todoId);

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todoList={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
