import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import TodoSearch from './/components/TodoComponents/TodoSearch';
import { data } from './data';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data,
      search: ''
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

  clearCompleted = () => {
    console.log('clearCompleted');
    this.setState({
      todos: this.state.todos.filter(task => {
        return !task.completed;
      })
    });
  };

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    const { search } = this.state;
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.task.toLowerCase().includes(search.toLowerCase());
    });

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoSearch
          search={this.state.search}
          handleSearch={this.handleSearch}
        />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList
          filteredTodos={filteredTodos}
          toggleCompleted={this.toggleCompleted}
          todoList={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
