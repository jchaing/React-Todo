import React from 'react';

const TodoSearch = props => {
  return (
    <div>
      <input
        value={props.search || ''}
        onChange={props.handleSearch}
        type="text"
        placeholder="search todo"
      />
    </div>
  );
};

export default TodoSearch;
