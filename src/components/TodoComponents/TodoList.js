// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import { ListGroup } from 'reactstrap';

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {/* <h3>TodoList</h3> */}
      <ListGroup>
        {props.filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleCompleted={props.toggleCompleted}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
