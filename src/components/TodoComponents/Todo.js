import React from 'react';

const Todo = props => {
  console.log(props);
  const handleClick = e => {
    e.preventDefault();
    props.toggleCompleted(props.todo.id);
    console.log(!props.todo.completed);
  };
  return (
    <div
      onClick={handleClick}
      className={`todo${props.todo.completed ? ' completed' : ''}`}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
