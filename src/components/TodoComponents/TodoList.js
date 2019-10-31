// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  console.log(props);
  return (
    <div>
      <h3>TodoList</h3>
      {props.todoList.map(todo => (
        <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
  );
};

export default TodoList;
