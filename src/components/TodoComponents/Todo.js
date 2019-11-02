import React from 'react';
import { ListGroupItem } from 'reactstrap';

const Todo = props => {
  console.log(props);
  const handleClick = e => {
    e.preventDefault();
    props.toggleCompleted(props.todo.id);
    console.log(!props.todo.completed);
  };
  return (
    <ListGroupItem
      onClick={handleClick}
      className={`todo${props.todo.completed ? ' completed' : ''} bg-dark text-light`}
    >
      {props.todo.task}
    </ListGroupItem>
  );
};

export default Todo;
