import React from 'react';
import { Input } from 'reactstrap';
const TodoSearch = props => {
  return (
    <Input
      className="col-3 mr-3"
      value={props.search || ''}
      onChange={props.handleSearch}
      type="text"
      placeholder="search"
    />
  );
};

export default TodoSearch;
