import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';


class Todos extends Component {


 render() {
      return this.props.todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delToDo={this.props.delToDo}/>
      ));
   }
}


//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
